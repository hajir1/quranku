import { useQuery } from "react-query";
import {
  getAllAsmaulHusna,
  getAllDoa,
  getAlQuranSurah,
  getAlQuranSurahDetail,
  getDzikirAfterSholat,
} from "../services/service";
import { useParams } from "react-router-dom";
import { getDzikirPagi, getDzikirSore } from "../../../be/src/services/doa.service";

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
  const {data,error,isLoading} = useQuery("allDatDzikir", getDzikirPagi);
  return {data,error,isLoading}
};
export const useDzikirsore = () => {
  const {data,error,isLoading} = useQuery("allDatDzikir", getDzikirSore);
  return {data,error,isLoading}
};
