import React, { createElement, createContext, useState } from 'react';

export const ConfigContext = createContext({
  productListAction: null,
  productCategoryListAction: null,
  assetsURL: '',
  actionTo: null,
});

const ConfigProvider = ({ children, config = {} as any }) => {

  const [currentConfig, setCurrentConfig] = useState<any>(config);

  const updateConfig = (newConfig) => {
    setCurrentConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
  };

  return (
    <ConfigContext.Provider value={{ config: currentConfig, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
