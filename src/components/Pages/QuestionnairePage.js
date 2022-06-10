import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

import datas from "../data.json";

function QuestionnairePage({ prevStep, formData, setFormData }) {
  const [odpA, seOdpA] = useState(0);
  const [odpB, seOdpB] = useState(0);
  const [odpC, seOdpC] = useState(0);
  const [odpD, seOdpD] = useState(0);

  return (
    <div className="container my-5  rounded shadow-lg text-start p-2">
      <h2 className="text-center">Ankieta</h2>
      {datas.map((data, indeksik) => (
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              <h5>{data.pytanie}</h5>
            </FormLabel>

            <RadioGroup name="radio-buttons-group" className="ms-5">
              {data.odpowiedzi.map((odp, index) => (
                <>
                  <FormControlLabel
                    value={index}
                    control={<Radio />}
                    label={odp}
                    onChange={() => {
                      if (index === 0) {
                        seOdpA(odpA + 1);
                      } else if (index === 1) {
                        seOdpB(odpB + 1);
                      } else if (index === 2) {
                        seOdpC(odpC + 1);
                      } else if (odpD + 1) {
                        seOdpD(odpD + 1);
                      }
                    }}
                  />
                </>
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
      <div className="text-center">
        <Button
          variant="contained "
          onClick={() => {
            if (odpA > odpB && odpA > odpC && odpA > odpD) {
              setFormData({ ...formData, questionnaire: 1 });
              prevStep();
            } else if (odpB > odpA && odpB > odpC && odpB > odpD) {
              setFormData({ ...formData, questionnaire: 2 });
              prevStep();
            } else if (odpC > odpA && odpC > odpB && odpC > odpD) {
              setFormData({ ...formData, questionnaire: 3 });
              prevStep();
            } else if (odpD > odpA && odpD > odpB && odpD > odpC) {
              setFormData({ ...formData, questionnaire: 4 });
              prevStep();
            }
          }}
        >
          Zapisz
        </Button>
      </div>
    </div>
  );
}

export default QuestionnairePage;
