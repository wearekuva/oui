/** @jsx React.h */
import React, { Component } from 'preact'
import svg from 'preact-svg';

export default props => <svg
    fill="currentColor"
    fit="true"
    height="1em" width="1em"
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid meet"
    style={{ verticalAlign: 'middle', ...props.style }}>
    <g><path d="m20 13.4l10 10-2.3 2.3-7.7-7.7-7.7 7.7-2.3-2.3z"/></g>
</svg>
