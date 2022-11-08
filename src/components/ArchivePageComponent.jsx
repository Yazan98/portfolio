import React, {useEffect} from 'react';
import ScreenContainerComponent from './common/ScreenContainerComponent';
import ToolbarComponent from './common/ToolbarComponent';
import FooterComponent from './common/FooterComponent';
import { BLACK_COLOR, DESCRIPTION_COLOR, PRIMARY_COLOR } from '../info/ColorUtils';
import getArchiveList from '../info/ArchiveList';
import MobileArchiveItem from "./childs/MobileArchiveItem";
import ReactGA from "react-ga";

export default function ArchivePageComponent() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <ScreenContainerComponent title="Yazan Tarifi Portfolio - Archive">
      <ToolbarComponent />

      <main className={"p-4 md:p-8 lg:p-8 xl:p-8"}>
        <h2 style={{ color: PRIMARY_COLOR }}>Archive</h2>
        <p className="ProjectsDescription">A big list of things I've worked on</p>

        <div className={"grid grid-cols-1 gap-4 block md:hidden lg:hidden xl:hidden"}>
          {getArchiveList().map((item) => (
              <MobileArchiveItem
                  name={item.name}
                  year={item.year}
                  createdAt={item.madeAt}
                  isOpenSource={item.isOpenSource}
                  builtWith={item.built} />
          ))}
        </div>

        <div className={"hidden md:block lg:block xl:block"} style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: '2em',
          padding: '2em',
        }}>
          <table className={"hidden md:block lg:block xl:block"} style={{
            marginTop: '2em',
            fontFamily: 'arial',
            borderCollapse: 'collapse',
            width: '100%',
          }}>
            <tr>
              <th style={{ color: PRIMARY_COLOR, textAlign: 'left', padding: '8px' }}>Year</th>
              <th style={{ color: PRIMARY_COLOR, textAlign: 'left', padding: '8px' }}>Title</th>
              <th style={{ color: PRIMARY_COLOR, textAlign: 'left', padding: '8px' }}>Made at</th>
              <th style={{ color: PRIMARY_COLOR, textAlign: 'left', padding: '8px' }}>Built with</th>
              <th style={{ color: PRIMARY_COLOR, textAlign: 'left', padding: '8px' }}>Type</th>
            </tr>

            {getArchiveList().map((item) => (
              <tr>
                <td style={{ color: BLACK_COLOR, textAlign: 'left', padding: '8px' }}>{item.year}</td>
                <td style={{ color: BLACK_COLOR, textAlign: 'left', padding: '8px' }}>{item.name}</td>
                <td style={{ color: DESCRIPTION_COLOR, textAlign: 'left', padding: '8px' }}>{item.madeAt}</td>
                <td style={{ color: DESCRIPTION_COLOR, textAlign: 'left', padding: '8px' }}>{item.built}</td>
                <td style={{ color: DESCRIPTION_COLOR, textAlign: 'left', padding: '8px' }}>{item.isOpenSource ? 'Open Source' : 'Closed Source'}</td>
              </tr>
            ))}
          </table>
        </div>
      </main>

      <FooterComponent />
    </ScreenContainerComponent>
  );
}
