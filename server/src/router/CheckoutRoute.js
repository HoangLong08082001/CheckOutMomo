import express from "express";
import CheckOut from "../controller/CheckOut.js";
const router = express.Router();

export default function CheckoutRoute(app) {
  router.post("/vnpay", CheckOut.ThanhToanVNPay);
  router.post("/momo", CheckOut.ThanhToanMoMo);
  return app.use("/thanhtoan", router);
}
