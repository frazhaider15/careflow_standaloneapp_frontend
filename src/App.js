import React, { useEffect, useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import { FormPreviewer } from "31g-form-parser";

function App() {
  const [form, setForm] = useState({});
  const location = useLocation();
  console.log("location: ", location);
  const getNewPage = async () => {
    try {
      const res = await fetch(
        `https://dev-backend-formbuilder.31g.co.uk/page/render?appId=${62}&path=${location.pathname.slice(
          1
        )}`,
        {
          method: "POST",
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
