var am,updateValues;am=new Amortizer,am.loadPaymentsFrom("data/data.json"),updateValues=function(t){return $("#amortization .body").html(t.buildTable()),$("#summary-monthly-payment").html(Amortizer.$(t.monthlyPayment)),$("#summary-total-payment").html(Amortizer.$(t.totalPayment)),$("#summary-total-interest").html(Amortizer.$(t.totalInterest)),$("#summary-pay-off-date").html(t.startDate.subtract(1,"months").format("MMM YYYY")),$(".num-payments").html(t.numPayments)},$("#info").on("submit",function(t){var a;return t.preventDefault(),a=$("#input-start-date-year").val()+"-"+$("#input-start-date-month").val()+"-01",am.update(parseInt($("#input-term").val()),parseFloat($("#input-loan-amount").val()),parseFloat($("#input-interest").val())/100,moment(a)),updateValues(am)});
//# sourceMappingURL=./app.js.map