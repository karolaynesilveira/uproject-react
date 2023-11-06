import { format } from "date-fns-tz";
import React from "react";
import { Label, Icon } from "semantic-ui-react";

const FilterLabels = ({ formData, formDataHandler }) => {
  const filterLabels = [];

  const removeFilter = (key) => {
    formDataHandler((prevData) => {
      const updatedData = { ...prevData };

      if (key === "budgetRange") {
        updatedData.orcamentoMin = "";
        updatedData.orcamentoMax = "";
      } else if (key === "executedBudgetRange") { // Add the key for "Orçamento Executado"
        updatedData.orcamentoExecutadoMin = "";
        updatedData.orcamentoExecutadoMax = "";
      } else if (key === "nome") {
        updatedData.nome = "";
      } else {
        const index = updatedData.status.indexOf(key);
        if (index !== -1) {
          updatedData.status.splice(index, 1);
        }
      }

      return updatedData;
    });
  };

  if (formData.nome) {
    filterLabels.push(
      <Label key="nome" style={{ marginBottom: "10px", marginLeft: "5px" }}>
        {formData.nome}{" "}
        <Icon name="close" color="red" onClick={() => removeFilter("nome")} />
      </Label>
    );
  }

  if (formData.orcamentoMin || formData.orcamentoMax) {
    filterLabels.push(
      <Label
        key="budgetRange"
        style={{ marginBottom: "10px", marginLeft: "5px" }}
      >
        Orçamento entre R${formData.orcamentoMin || 0.0} e R$
        {formData.orcamentoMax || "-"}{" "}
        <Icon
          name="close"
          color="red"
          onClick={() => removeFilter("budgetRange")}
        />
      </Label>
    );
  }

  // Add the "Orçamento Executado" filter
  if (formData.orcamentoExecutadoMin || formData.orcamentoExecutadoMax) {
    filterLabels.push(
      <Label
        key="executedBudgetRange"
        style={{ marginBottom: "10px", marginLeft: "5px" }}
      >
        Orçamento Executado entre R${formData.orcamentoExecutadoMin || 0.0} e R$
        {formData.orcamentoExecutadoMax || "-"}{" "}
        <Icon
          name="close"
          color="red"
          onClick={() => removeFilter("executedBudgetRange")}
        />
      </Label>
    );
  }

  if (formData.status.length > 0) {
    formData.status.forEach((status) => {
      filterLabels.push(
        <Label
          key={`status_${status}`}
          style={{ marginBottom: "10px", marginLeft: "5px" }}
        >
          {status}{" "}
          <Icon name="close" color="red" onClick={() => removeFilter(status)} />
        </Label>
      );
    });
  }

  if (formData.periodoMin || formData.periodoMax) {
    const formattedMinDate = formData.periodoMin
      ? format(formData.periodoMin, 'dd/MM/yyyy')
      : '';
    const formattedMaxDate = formData.periodoMax
      ? format(formData.periodoMax, 'dd/MM/yyyy')
      : '-';
  
    filterLabels.push(
      <Label
        key="dateRange"
        style={{ marginBottom: "10px", marginLeft: "5px" }}
      >
        Período entre {formattedMinDate} e {formattedMaxDate}{' '}
        <Icon
          name="close"
          color="red"
          onClick={() => removeFilter("dateRange")}
        />
      </Label>
    );
  }

  return <div>{filterLabels}</div>;
};

export default FilterLabels;
