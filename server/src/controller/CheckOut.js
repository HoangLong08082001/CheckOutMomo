var dateFormat = require("date-format");
var sortObject = require("sortobject");
var querystring = require("qs");
const { json } = require("body-parser");
const ThanhToanVNPay = (req, res) => {
  // let ipAddr =
  //   req.headers["x-forwarded-for"] ||
  //   req.connection.remoteAddress ||
  //   req.socket.remoteAddress ||
  //   req.connection.socket.remoteAddress;

  // let tmnCode = "84Q3N3XL";
  // let secretKey = "QUESXHXBMPYCWHXMSOVJEEQBKDJKSLYJ";
  // let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
  // let date = new Date();
  // let createDate = format("yyyyMMddHHmmss", date);
  // let orderId = format("HHmmss", date);
  // let amount = req.body.sumofAmount;
  // let bankCode = "NCB";
  // let orderInfo = "CHUYEN KHUYEN DAT TOUR";
  // let orderType = "other";
  // let locale = "vn";
  // let currCode = "VND";
  // let vnp_Params = {};
  // vnp_Params["vnp_Version"] = "2.1.0";
  // vnp_Params["vnp_Command"] = "pay";
  // vnp_Params["vnp_TmnCode"] = tmnCode;
  // vnp_Params["vnp_Locale"] = locale;
  // vnp_Params["vnp_CurrCode"] = currCode;
  // vnp_Params["vnp_TxnRef"] = orderId;
  // vnp_Params["vnp_OrderInfo"] = "Thanh toan cho ma GD:" + orderId;
  // vnp_Params["vnp_OrderType"] = orderType;
  // vnp_Params["vnp_Amount"] = amount * 100;
  // vnp_Params["vnp_ReturnUrl"] = "http://localhost:3000/cart";
  // vnp_Params["vnp_IpAddr"] = ipAddr === "::1" ? "127.0.0.1" : "::1";
  // vnp_Params["vnp_CreateDate"] = createDate;
  // vnp_Params["vnp_BankCode"] = bankCode;
  // vnp_Params = sortObject(vnp_Params);
  // let signData = queryString.stringify(vnp_Params, { encode: false });
  // let hmac = crypto.createHmac("sha512", secretKey);
  // let signed = hmac.update(new Buffer.from(signData, "utf-8")).digest("hex");
  // vnp_Params["vnp_SecureHash"] = signed;
  // vnpUrl += "?" + queryString.stringify(vnp_Params, { encode: false });
  var ipAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  var tmnCode = "84Q3N3XL";
  var secretKey = "QUESXHXBMPYCWHXMSOVJEEQBKDJKSLYJ";
  var vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
  var returnUrl = "http://localhost:3000/cart";

  var date = new Date();

  var createDate = dateFormat(date, "yyyymmddHHmmss");
  var orderId = dateFormat(date, "HHmmss");
  var amount = 1000000;
  var bankCode = "NCB";

  var orderInfo = "THANH TOAN";
  var orderType = "1256";
  var locale = req.body.language;
  if (locale === null || locale === "") {
    locale = "vn";
  }
  var currCode = "VND";
  var vnp_Params = {};
  vnp_Params["vnp_Version"] = "2.1.0";
  vnp_Params["vnp_Command"] = "pay";
  vnp_Params["vnp_TmnCode"] = tmnCode;
  // vnp_Params['vnp_Merchant'] = ''
  vnp_Params["vnp_Locale"] = locale;
  vnp_Params["vnp_CurrCode"] = currCode;
  vnp_Params["vnp_TxnRef"] = orderId;
  vnp_Params["vnp_OrderInfo"] = orderInfo;
  vnp_Params["vnp_OrderType"] = orderType;
  vnp_Params["vnp_Amount"] = amount * 100;
  vnp_Params["vnp_ReturnUrl"] = returnUrl;
  vnp_Params["vnp_IpAddr"] = ipAddr === "::1" ? "127.0.0.1" : "::1";
  vnp_Params["vnp_CreateDate"] = createDate;
  if (bankCode !== null && bankCode !== "") {
    vnp_Params["vnp_BankCode"] = bankCode;
  }

  vnp_Params = sortObject(vnp_Params);

  var signData = querystring.stringify(vnp_Params, { encode: false });
  var crypto = require("crypto");
  var hmac = crypto.createHmac("sha512", secretKey);
  var signed = hmac.update(new Buffer.from(signData, "utf-8")).digest("hex");
  vnp_Params["vnp_SecureHash"] = signed;
  vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });
  console.log(vnp_Params);
  console.log(vnpUrl);
  return res.status(200).json({ message: "success", data: vnpUrl });
};
const ThanhToanMoMo = (req, res) => {
  var accessKey = "F8BBA842ECF85";
  var secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  var orderInfo = "pay with MoMo";
  var partnerCode = "MOMO";
  var redirectUrl = "http://localhost:3000/cart";
  var ipnUrl = "http://localhost:3000/cart";
  var requestType = "payWithMethod";
  var amount = "50000";
  var orderId = partnerCode + new Date().getTime();
  var requestId = orderId;
  var extraData = "";
  var paymentCode =
    "T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==";
  var orderGroupId = "";
  var autoCapture = true;
  var lang = "vi";

  //before sign HMAC SHA256 with format
  //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
  var rawSignature =
    "accessKey=" +
    accessKey +
    "&amount=" +
    amount +
    "&extraData=" +
    extraData +
    "&ipnUrl=" +
    ipnUrl +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&partnerCode=" +
    partnerCode +
    "&redirectUrl=" +
    redirectUrl +
    "&requestId=" +
    requestId +
    "&requestType=" +
    requestType;
  //puts raw signature
  console.log("--------------------RAW SIGNATURE----------------");
  console.log(rawSignature);
  //signature
  const crypto = require("crypto");
  var signature = crypto
    .createHmac("sha256", secretKey)
    .update(rawSignature)
    .digest("hex");
  console.log("--------------------SIGNATURE----------------");
  console.log(signature);

  //json object send to MoMo endpoint
  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    partnerName: "Test",
    storeId: "MomoTestStore",
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    lang: lang,
    requestType: requestType,
    autoCapture: autoCapture,
    extraData: extraData,
    orderGroupId: orderGroupId,
    signature: signature,
  });
  //Create the HTTPS objects
  const https = require("https");
  const options = {
    hostname: "test-payment.momo.vn",
    port: 443,
    path: "/v2/gateway/api/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(requestBody),
    },
  };
  //Send the request and get the response
  const requests = https.request(options, (resq) => {
    console.log(`Status: ${resq.statusCode}`);
    console.log(`Headers: ${JSON.stringify(resq.headers)}`);
    resq.setEncoding("utf8");
    resq.on("data", (body) => {
      console.log("Body: ");
      console.log(body);
      console.log("resultCode: ");
      console.log(JSON.parse(body).resultCode);
      let data = JSON.parse(body);
      let pay_url = data.payUrl;
      console.log(pay_url);
      if (pay_url) {
        return res.status(200).json({ message: "succes", url: pay_url });
      }
    });
    resq.on("end", () => {
      console.log("No more data in response.");
    });
  });

  requests.on("error", (e) => {
    console.log(`problem with request: ${e.message}`);
  });
  // write data to request body
  console.log("Sending....");

  requests.write(requestBody);
  requests.end();
};
module.exports = { ThanhToanVNPay, ThanhToanMoMo };
