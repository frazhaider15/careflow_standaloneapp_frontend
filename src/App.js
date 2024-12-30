import React, { useEffect, useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import { FormPreviewer } from "31g-form-parser";

function App() {
  const [form, setForm] = useState({});
  const location = useLocation();
  console.log("location: ", location);
  var baseUrl = process.env.REACT_APP_BASE_URL
  var token = process.env.REACT_APP_TOKEN
  const getNewPage = async () => {
    try {
      // I want  to send body as well with this request
      const res = await fetch(
        `${baseUrl}/page/render?token=${token}&path=${location.pathname.slice(1)}`,
        {
          method: "POST",
          body : JSON.stringify({})
        }
      );

      setForm(res.data.form);
      console.log("res: ", res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getNewPage();
  }, [location.pathname]);

  return (
    <div>
      <FormPreviewer form={form} dataDictionary={{}} />
    </div>
  );
}

export default App;
