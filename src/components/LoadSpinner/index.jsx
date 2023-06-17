import React from "react";
// css
import './assets/css/load-spinner.css';

// icons
import { Icon, enableCache } from '@iconify/react';
enableCache('local');

const LoadSpinner = () => {

    return (
      <Icon className="loading-spinner" icon="line-md:loading-alt-loop" />
    )
}

export default LoadSpinner;