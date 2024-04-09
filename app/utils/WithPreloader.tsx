'use client';

import { useState, useEffect, ComponentType } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: goldenrod;
  color: black;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
`;

const withPreloader = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> => {
  const WithPreloader: React.FC<P> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => {
        setLoading(false);
      };

      window.addEventListener('load', handleLoad);

      return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
      <>{loading ? <Div>LOADING</Div> : <WrappedComponent {...props} />}</>
    );
  };

  return WithPreloader;
};

export default withPreloader;
