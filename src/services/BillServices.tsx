import { handleError } from "../helpers/ErrorHandler";
import { BillCreate, BillDisplay } from "../types/Bill";
import apiClient from "./ApiClient";

export const getBillsCreatedAPI = async (
  page: number = 1,
  perPage: number = 4
): Promise<{
  bills: BillDisplay[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}> => {
  try {
    const { data } = await apiClient.get("/api/bills/created", {
      params: { page, perPage },
    });
    console.log(data);

    return {
      bills: data.bills as BillDisplay[],
      totalItems: data.total_items,
      currentPage: data.current_page,
      totalPages: data.total_pages,
    };
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getBillsParticipatedAPI = async (
  page: number = 1,
  perPage: number = 5
): Promise<{
  bills: BillDisplay[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}> => {
  try {
    const { data } = await apiClient.get("/api/bills/assigned", {
      params: { page, perPage },
    });
    console.log(data);

    return {
      bills: data.bills as BillDisplay[],
      totalItems: data.total_items,
      currentPage: data.current_page,
      totalPages: data.total_pages,
    };
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const createBillAPI = async (bill: BillCreate) => {
  try {
    const { data } = await apiClient.post("/api/create-bill", bill);
    return data;
  } catch (error) {
    handleError(error);
  }
};
