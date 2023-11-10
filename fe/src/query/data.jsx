// hooks/useAlQuranData.js
import { useQuery } from "react-query";
import {
  getAllAsmaulHusna,
  getAlQuranSurah,
  getAllDataDoa,
  getAlQuranSurahDetail,
} from "../services/service";
import { useParams } from "react-router-dom";

export const useAlQuranDataSurah = () => {
  const { data, error, isLoading } = useQuery("alQuranData", getAlQuranSurah);
  return { data, error, isLoading };
};
export const useAlQuranDataSurahDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery("alQuranDataDetail", () => {
    return getAlQuranSurahDetail(id);
  });
  return { data, error, isLoading };
};
export const useAllAsmaulHusna = () => {
  const { data, error, isLoading } = useQuery("asmaulHusna", () => {
    return getAllAsmaulHusna();
  });
  return { data, error, isLoading };
};
// export const useAllDataDoaDoa = () => {
//   const { data, isLoading, error } = useQuery("dataDoaDoa", getAllDataDoa);
//   return { data, isLoading, error };
// };
