// this component based on https://gist.github.com/revolunet/cfc6fe0c5992897b29388373a8e51be7

import * as React from 'react';
import ReactDOM from 'react-dom';
import { LoadRemoteComponentProps } from './LoadRemoteComponent.types';

let $script = (_url: any, _callback: any) => null;

// load remote component and return it when ready
// display current children while loading
// interface ILoadRemoteComponentProps {
//   url: any;
//   name: string;
//   props: any;
// }

declare global {
   interface Window {
      React: any;
      [key: string]: any; // Add index signature
   }
}

class LoadRemoteComponent extends React.Component<LoadRemoteComponentProps,
   {
      //state
      Component: any;
      error: string;
   }
> {
   constructor(props: any) {
      super(props);
      this.state = {
         Component: null,
         error: ''
      };
   }

   public componentDidMount() {
      // expose React for UMD build
      window.React = React;
      window.ReactDOM = ReactDOM;
      $script = require('scriptjs');
      // async load of remote UMD component
      $script(this.props.url, () => {
         const target = window[this.props.name];
         if (target && target.default) {
            // workaround for the Personalization component
            // there should be a way to configure webpack.config.js in the Content Personalization service to target window like all the other remote components.
            // no idea how to make it work though.
            this.setState({
               error: '',
               Component: target.default
            });
         } else if (target) {
            // loaded OK
            this.setState({
               error: '',
               Component: target
            });
         } else {
            // loaded fail
            this.setState({
               error: `An error has occurred`,
               Component: null
            });
         }
      });
   }

   public render() {
      if (this.state.Component) {
         return React.createElement(this.state.Component, this.props.props);
      } else if (this.state.error) {
         return <p>{this.state.error}</p>;
      } else {
         return <>{this.props.children}</>;
      }
   }
}

export default LoadRemoteComponent;
