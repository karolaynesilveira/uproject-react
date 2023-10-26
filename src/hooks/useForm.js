import api from '../commons/api';
import { useState, useEffect } from 'react';

const useForm = (callback, initialState, url, dataFormatter) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const _updateInitialState = (k, v) => {
    if (initialState.persistent) {
      initialState[k] = v;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!url) return;
      setLoading(true);
      try {
        const result = await api.get(url);
        const formattedData = dataFormatter ? dataFormatter(result.data) : result.data;
        if (isMounted) {
          setData(formattedData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, dataFormatter]);

  const handleChange = event => {
    const { name, value } = event.target;
    const auxData = { ...data, [name]: value };
    _updateInitialState(name, value);
    setData(auxData);
  };

  const handleSelectChange = (event, { name, value }) => {
    const auxData = { ...data, [name]: value };
    _updateInitialState(name, value);
    setData(auxData);
  };

  const handleSelectChangeRadioOption = (event, { name, value }) => {
    const auxData = { ...data };
    if (auxData[name] === value) {
      auxData[name] = null;
      _updateInitialState(name, null);
    } else {
      auxData[name] = value;
      _updateInitialState(name, value);
    }
    setData(auxData);
  };

  const handleSubmit = async event => {
    if (event) {
      event.preventDefault();
    }
    setLoading(true);
    await callback();
    setLoading(false);
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    const { name } = event.target;
    const auxData = { ...data, [name]: file };
    _updateInitialState(name, file);
    setData(auxData);
  };

  const handleDateChange = (date, name) => {
    const auxData = { ...data, [name]: date };
    _updateInitialState(name, date);
    setData(auxData);
  };

  return {
    data,
    loading,
    handleChange,
    handleSubmit,
    setData,
    handleSelectChange,
    handleFileChange,
    handleDateChange,
    setLoading,
    handleSelectChangeRadioOption,
  };
};

export default useForm;
