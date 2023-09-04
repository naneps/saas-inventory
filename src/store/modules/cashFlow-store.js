import { defineStore } from "pinia";
export const useCashFlowStore = defineStore("cashFlow", {
  state() {
    return {
      transactions: [
        {
          id: 1,
          date: "2023-08-15",
          description: "Pembelian Stok Barang",
          type: "expense",
          amount: 500.0,
          category: "Pembelian",
          notes: "Pembelian stok barang dari Vendor A",
        },
        {
          id: 2,
          date: "2023-08-18",
          description: "Penjualan Barang",
          type: "income",
          amount: 1000.0,
          category: "Penjualan",
          notes: "Penjualan kepada Pelanggan B",
        },
        {
          id: 3,
          date: "2023-08-20",
          description: "Biaya Operasional",
          type: "expense",
          amount: 200.0,
          category: "Operasional",
          notes: "Pembayaran sewa tempat usaha",
        },
        {
          id: 4,
          date: "2023-08-25",
          description: "Penerimaan Pembayaran dari Pelanggan",
          type: "income",
          amount: 800.0,
          category: "Penerimaan",
          notes: "Pembayaran tagihan oleh Pelanggan C",
        },
        {
          id: 5,
          date: "2023-08-28",
          description: "Pembayaran Utang kepada Pemasok",
          type: "expense",
          amount: 300.0,
          category: "Pembayaran Utang",
          notes: "Pembayaran utang kepada Vendor A",
        },
        {
          id: 6,
          date: "2023-08-30",
          description: "Penerimaan Uang Tunai",
          type: "income",
          amount: 50.0,
          category: "Uang Tunai",
          notes: "Penerimaan uang tunai dari pelanggan",
        },
      ],
    };
  },
});
