// hooks/useAlQuranData.js
import { useQuery } from "react-query";
import {
  ApiAlQuranSurah,
  ApiAlQuranSurahDetail,
  ApiAllAsmaulHusna,
} from "../services/service";
import { useParams } from "react-router-dom";

export const useAlQuranDataSurah = () => {
  const { data, error, isLoading } = useQuery("alQuranData", ApiAlQuranSurah);
  return { data, error, isLoading };
};
export const useAlQuranDataSurahDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery("alQuranDataDetail", () => {
    return ApiAlQuranSurahDetail(id);
  });
  return { data, error, isLoading };
};
export const useAllAsmaulHusna = () => {
  const { data, error, isLoading } = useQuery("asmaulHusna", () => {
    return ApiAllAsmaulHusna();
  });
  return { data, error, isLoading };
};
