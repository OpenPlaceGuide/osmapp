import React, { LegacyRef } from 'react';
import { FeaturePanel } from './FeaturePanel';
import { Drawer } from '../utils/Drawer';
import {
  DRAWER_PREVIEW_HEIGHT,
  DRAWER_PREVIEW_PADDING,
  DRAWER_TOP_OFFSET,
} from '../utils/MobilePageDrawer';
import { useScreensize } from '../../helpers/hooks';
import { useFeatureContext } from '../utils/FeatureContext';
import { Scrollbars } from 'react-custom-scrollbars';

const DRAWER_CLASSNAME = 'featurePanelInDrawer';

type FeaturePanelInDrawerProps = {
  scrollRef: LegacyRef<Scrollbars>;
};

export const FeaturePanelInDrawer = ({
  scrollRef,
}: FeaturePanelInDrawerProps) => {
  const { feature } = useFeatureContext();
  const [collapsedHeight, setCollapsedHeight] = React.useState<number>(
    DRAWER_PREVIEW_HEIGHT,
  );
  const { height: windowHeight } = useScreensize();
  const maxCollapsedHeight = windowHeight / 3;

  const headingRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const headingDiv = headingRef.current;
    if (!headingDiv) return;

    const baseHeight = Math.min(headingDiv.clientHeight, maxCollapsedHeight);
    setCollapsedHeight(baseHeight + DRAWER_PREVIEW_PADDING);
  }, [headingRef, feature, maxCollapsedHeight]);

  return (
    <Drawer
      key={`drawer-${collapsedHeight}px`}
      topOffset={DRAWER_TOP_OFFSET}
      className={DRAWER_CLASSNAME}
      collapsedHeight={collapsedHeight}
      scrollRef={scrollRef}
    >
      <FeaturePanel headingRef={headingRef} />
    </Drawer>
  );
};
