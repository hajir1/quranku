import { useQuery } from "react-query";
import {
  getAllAsmaulHusna,
  getAllDoa,
  getAlQuranSurah,
  getAlQuranSurahDetail,
  getDzikirAfterSholat,
  getDzikirpagi,
  getDzikirsore,
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

export const useAllDoa = () => {
  const { data, isLoading, error } = useQuery("dataDoaDoa", getAllDoa);
  return { data, isLoading, error };
};
export const useDzikirAfterSholat = () => {
  const {data,error,isLoading} = useQuery("allDatDzikir", getDzikirAfterSholat);
  return {data,error,isLoading}
};
export const useDzikirpagi = () => {
  const {data,error,isLoading} = useQuery("allDatDzikir", getDzikirpagi);
  return {data,error,isLoading}
};
export const useDzikirsore = () => {
  const {data,error,isLoading} = useQuery("allDatDzikir", getDzikirsore);
  return {data,error,isLoading}
};
