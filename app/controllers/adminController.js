
class adminController{
    //[GET]: /admin/account-manager
    accountM(req,res,next){
        res.render('account-manager', { title: "Book Selling" });
    }
    //[GET]: /admin/receipt-manager
    receiptM(req,res,next){
        res.render('receipt-manager', { title: "Book Selling" });
    }
    //[GET]: /admin/order-manager
    orderM(req,res,next){
        res.render('order-manager', { title: "Book Selling" });
    }
    //[GET]: /admin/stock-manager
    stockM(req,res,next){
        res.render('stock-manager', { title: "Book Selling" });
    }
    //[GET]: /admin/input-order
    InputO(req,res,next){
        res.render('input-order', { title: "Book Selling" });
    }
    //[GET]: /admin/order-detail
    OrderD(req,res,next){
        res.render('order-detail', { title: "Book Selling" });
    }
    //[GET]: /admin/receipt-detail
    receiptD(req,res,next){
        res.render('receipt-detail', { title: "Book Selling" });
    }

    login(req,res,next){
        res.render('login', { title: "Book Selling" });
    }
    forgetpass(req,res,next){
        res.render('forgetpass', { title: "Book Selling" });
    }
}
module.exports = new adminController