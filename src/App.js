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
      // I want  to send body as well with this request <- OK
      let res = await fetch(
        `https://dev-backend-formbuilder.31g.co.uk/page/render?token=${"ctmfj8afvq6idkll45rg"}&path=${location.pathname.slice(
          1
        )}`,
        {
          method: "POST",
          body: JSON.stringify({}),
        }
      );
      res = await res.json();
      console.log("res: ", res);
      setForm(JSON.parse(res?.data?.form));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getNewPage();
  }, [location.pathname]);

  console.log('form:', form);
  return (
    <div>
      <FormPreviewer form={form} dataDictionary={{}} />
    </div>
  );
}

export default App;
