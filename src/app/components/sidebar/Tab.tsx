import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { textFontWeight } from 'app/components/styles/typography';

export const Tab: FC<{ iconClass: string; label: string; linkTo: string }> = ({
  iconClass,
  label,
  linkTo,
}) => {
  const match = useRouteMatch(linkTo);
  const [isHover, setHover] = useState(false);

  return (
    <TabItem
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <TabLink to={linkTo} isMatch={!!match} isHover={isHover}>
        <TabIcon isMatch={!!match}>
          <i className={iconClass}></i>
        </TabIcon>
        <TabText isMatch={!!match}>{label}</TabText>
      </TabLink>
    </TabItem>
  );
};

const TabItem = styled.li({});

const TabLink = styled(Link)<{ isMatch: boolean; isHover: boolean }>(
  ({ isMatch, isHover }) => ({
    backgroundColor: isMatch ? '#fff' : isHover ? '#E6ECF1' : 'transparent',
    borderBottomColor: isMatch ? '#E6ECF1' : 'transparent',
    borderBottomLeftRadius: 4,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftColor: isMatch ? '#E6ECF1' : 'transparent',
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderTopColor: isMatch ? '#E6ECF1' : 'transparent',
    borderTopLeftRadius: 4,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    alignItems: 'center',
    display: 'flex',
    height: 40,
    paddingLeft: 16,
    textDecorationLine: 'none',
    transition: 'all 200ms',
  }),
);

const TabIcon = styled.div<{ isMatch: boolean }>(({ isMatch }) => ({
  color: isMatch ? '#F06292' : '#9DAAB6',
  fontSize: 16,
  marginRight: 4,
  width: 20,
}));

const TabText = styled.div<{ isMatch: boolean }>(({ isMatch }) => ({
  color: isMatch ? '#22294D' : '#9DAAB6',
  fontSize: 16,
  fontWeight: textFontWeight.semiBold,
}));
