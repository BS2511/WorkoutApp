using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCDemo.Controllers
{
    public class LoginController : HomeController
    {
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(d_login_data objUser)
        {
            if (ModelState.IsValid)
            {
                using (DB_Entities db = new DB_Entities())
                {
                    var obj = db.d_login_data.Where(a => a.d_login_desc_st.Equals(objUser.d_login_desc_st) && a.d_pass_desc_st.Equals(objUser.d_pass_desc_st)).FirstOrDefault();

                    if (obj != null)
                    {
                        Session["LoginID"] = obj.d_login_id.ToString();
                        Session["Login"] = obj.d_login_desc_st.ToString();

                        //return RedirectToAction("Home/Index");
                        //return RedirectToRoute(nameof(HomeController) + nameof(HomeController.Index));
                        return RedirectToAction("Dashboard", "Home");
                    }
                }
            }
            return View(objUser);
        }     

    }
}