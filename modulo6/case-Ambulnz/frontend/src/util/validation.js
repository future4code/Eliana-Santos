import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const mode = "all";

const defaultValues = {
  name: "",
};

const validation = {
  mode,
  defaultValues,
  resolver: yupResolver(
    yup
      .object()
      .shape({
        name: yup.string().required("Nome é obrigatório"),
      })
      .required()
  ),
};

export default validation;
