export const ALL_FILTER_TYPE: string;
export const ANDROID_FILTER_TYPE: string;
export const IOS_FILTER_TYPE: string;
export const WEBSITES_FILTER_TYPE: string;
export const WEB_APPS_FILTER_TYPE: string;
export const MAC_APPS_FILTER_TYPE: string;
export const TOOLS_FILTER_TYPE: string;

export interface ProjectData {
    id: string | number;
    name: string;
    type: string;
    description: string;
    createdAt: string;
    image?: string;
    link?: string;
    tags?: string[];
}

export default function getProjectsList(): ProjectData[];
