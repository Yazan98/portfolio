import React from 'react';

interface Props {
    children: React.ReactNode;
}
interface State {
    hasError: boolean;
}

// Detects failures to load a code-split chunk (e.g. a stale build after a
// redeploy, or a flaky network) so we can recover with a single reload.
function isChunkLoadError(error: unknown): boolean {
    const msg = (error as Error)?.message || '';
    const name = (error as Error)?.name || '';
    return /ChunkLoadError/i.test(name) || /Loading chunk|dynamically imported module|Failed to fetch dynamically imported/i.test(msg);
}

const RELOAD_KEY = 'yt-chunk-reloaded';

/**
 * Catches any render/lazy-load error and shows a graceful fallback instead of
 * a white screen. Chunk-load errors trigger one automatic reload (guarded
 * against loops) since a fresh index.html usually resolves them.
 */
class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: unknown) {
        // eslint-disable-next-line no-console
        console.error('ErrorBoundary caught:', error);
        if (isChunkLoadError(error)) {
            try {
                if (!sessionStorage.getItem(RELOAD_KEY)) {
                    sessionStorage.setItem(RELOAD_KEY, '1');
                    window.location.reload();
                }
            } catch { /* ignore */ }
        }
    }

    handleReload = () => {
        try { sessionStorage.removeItem(RELOAD_KEY); } catch { /* ignore */ }
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <section className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-bg px-6 py-24 text-center">
                    <span className="font-mono text-sm font-semibold tracking-[0.12em] text-acc">SOMETHING WENT WRONG</span>
                    <h1 className="m-0 font-display text-[clamp(32px,5vw,56px)] font-bold tracking-[-0.03em] text-ink">
                        This page hit a snag<span className="text-acc">.</span>
                    </h1>
                    <p className="m-0 max-w-md text-[17px] leading-relaxed text-ink3">
                        Reloading usually fixes it. If it keeps happening, it may be a stale build in your browser cache.
                    </p>
                    <button
                        type="button"
                        onClick={this.handleReload}
                        className="rounded-full bg-btn-bg px-6 py-3 text-sm font-semibold text-btn-fg transition-transform hover:-translate-y-0.5"
                    >
                        Reload the page
                    </button>
                </section>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
