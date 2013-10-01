/** @namespace LM */
var LM = LM || {};

/**
 * LM
 * Namespace with all the information of the LM.
 * @namespace LM
 *
 * @param {Object} namespace for the constructor
 */

(function(namespaces) {
    var _MODULE_NAME = 'Images',
    /** @memberOf LM
     *Have the LM properties
     */
    _images = {
            "blank.gif":"http://i.imgur.com/yRxWxVTs.jpg",
			"cafemania-01-large.jpg":"http://i.imgur.com/RrYrouF.jpg",
			"cafemania-01-medium.jpg":"http://i.imgur.com/CoxVVr6.jpg",
			"cafemania-01-small.jpg":"http://i.imgur.com/Qho98EX.jpg",
			"cafemania-02-large.jpg":"http://i.imgur.com/5v4l8WR.jpg",
			"cafemania-02-medium.jpg":"http://i.imgur.com/J9kws9b.jpg",
			"cafemania-02-small.jpg":"http://i.imgur.com/T1vUklR.jpg",
			"cafemania-03-large.jpg":"http://i.imgur.com/g2gpBki.jpg",
			"cafemania-03-medium.jpg":"http://i.imgur.com/ShiCkwQ.jpg",
			"cafemania-03-small.jpg":"http://i.imgur.com/uhqTPY1.jpg",
			"cafemania-04-large.jpg":"http://i.imgur.com/nBVjqWG.jpg",
			"cafemania-04-medium.jpg":"http://i.imgur.com/ZyBdwE4.jpg",
			"cafemania-04-small.jpg":"http://i.imgur.com/eDCiEjU.jpg",
			"fancybox_buttons.png":"http://i.imgur.com/OtZRnqk.png",
			"fancybox_loading.gif":"http://i.imgur.com/FfveY1V.gif",
			"fancybox_loading@2x.gif":"http://i.imgur.com/VHlVwuK.gif",
			"fancybox_overlay.png":"http://i.imgur.com/txkO2fu.png",
			"fancybox_sprite.png":"http://i.imgur.com/ohTKO2f.png",
			"fancybox_sprite@2x.png":"http://i.imgur.com/N7lNgD7.png",
			"fazendamobile-01-large.jpg":"http://i.imgur.com/yDLWHOw.jpg",
			"fazendamobile-01-medium.jpg":"http://i.imgur.com/AcQvpwX.jpg",
			"fazendamobile-02-large.jpg":"http://i.imgur.com/z7gb1wv.jpg",
			"fazendamobile-02-medium.jpg":"http://i.imgur.com/UEMIaVl.jpg",
			"fazendamobile-03-large.jpg":"http://i.imgur.com/n3iRWxp.jpg",
			"fazendamobile-03-medium.jpg":"http://i.imgur.com/KmvD6kZ.jpg",
			"fazendamobile-04-large.jpg":"http://i.imgur.com/ohQP9PD.jpg",
			"fazendamobile-04-medium.jpg":"http://i.imgur.com/6tbAC4Q.jpg",
			"fazendamobile-05-large.jpg":"http://i.imgur.com/cmWfbQW.jpg",
			"fazendamobile-05-medium.jpg":"http://i.imgur.com/CQgXXea.jpg",
			"fazendamobile-06-large.jpg":"http://i.imgur.com/9leA8Qn.jpg",
			"fazendamobile-06medium.jpg":"http://i.imgur.com/42lMqyq.jpg",
			"findandclimb-01-large.jpg":"http://i.imgur.com/qL44mas.jpg",
			"findandclimb-01-medium.jpg":"http://i.imgur.com/UkY0BM7.jpg",
			"findandclimb-01-small.jpg":"http://i.imgur.com/FWAvvSz.jpg",
			"findandclimb-02-large.jpg":"http://i.imgur.com/nllnveY.jpg",
			"findandclimb-02-medium.jpg":"http://i.imgur.com/p6ta5Az.jpg",
			"findandclimb-02-small.jpg":"http://i.imgur.com/NLPBw0t.jpg",
			"findandclimb-03-large.jpg":"http://i.imgur.com/VFnq6AA.jpg",
			"findandclimb-03-medium.jpg":"http://i.imgur.com/enbw4KP.jpg",
			"findandclimb-03-small.jpg":"http://i.imgur.com/RVrKtB4.jpg",
			"findandclimb-04-large.jpg":"http://i.imgur.com/Z76zyRM.jpg",
			"findandclimb-04-medium.jpg":"http://i.imgur.com/TPThkSC.jpg",
			"findandclimb-04-small.jpg":"http://i.imgur.com/mSTpjKs.jpg",
			"findandclimb-05-large.jpg":"http://i.imgur.com/vgeGt2c.jpg",
			"findandclimb-05-medium.jpg":"http://i.imgur.com/9DrKv5k.jpg",
			"findandclimb-05-small.jpg":"http://i.imgur.com/2HoeSKm.jpg",
			"findandclimb-logo.jpg":"http://i.imgur.com/6y5O3uG.jpg",
			"knorrsabor-01-large.jpg":"http://i.imgur.com/q0oxfw8.jpg",
			"knorrsabor-02-large.jpg":"http://i.imgur.com/VyXPnTP.jpg",
			"knorrsabor-03-large.jpg":"http://i.imgur.com/ge67Vxn.jpg",
			"knorrsabor-04-large.jpg":"http://i.imgur.com/Z5yNrpv.jpg",
			"knorrsabor-05-large.jpg":"http://i.imgur.com/PG1yRTu.jpg",
			"knorrsabor-06-large.jpg":"http://i.imgur.com/7IF6WhH.jpg",
			"knorrsabor-07-large.jpg":"http://i.imgur.com/tbHsgcc.jpg",
			"knorrsabor-08-large.jpg":"http://i.imgur.com/jcXReDC.jpg",
			"knorrsabor-09-large.jpg":"http://i.imgur.com/u1wS639.jpg",
			"knorrsabor-10-large.jpg":"http://i.imgur.com/xYBUIk6.jpg",
			"knorrsabor-11-large.jpg":"http://i.imgur.com/AwTlZUg.jpg",
			"logos-01-large.jpg":"http://i.imgur.com/PcfsUql.jpg",
			"logos-01-small.jpg":"http://i.imgur.com/PDVCpSm.jpg",
			"logos-02-large.jpg":"http://i.imgur.com/xLa3PU7.jpg",
			"logos-02-small.jpg":"http://i.imgur.com/X36LHkq.jpg",
			"logos-03-large.jpg":"http://i.imgur.com/h7nKOgr.jpg",
			"logos-03-small.jpg":"http://i.imgur.com/PKdTS85.jpg",
			"logos-04-large.jpg":"http://i.imgur.com/kgE4hCa.jpg",
			"logos-04-small.jpg":"http://i.imgur.com/Bkj2qZj.jpg",
			"logos-05-large.jpg":"http://i.imgur.com/XqQpUyc.jpg",
			"logos-05-small.jpg":"http://i.imgur.com/zwocMoX.jpg",
			"lucianagomez-01-large.jpg":"http://i.imgur.com/lCUpjq0.jpg",
			"lucianagomez-01-medium.jpg":"http://i.imgur.com/1QNraYs.jpg",
			"lucianagomez-02-large.jpg":"http://i.imgur.com/qdVIy5w.jpg",
			"lucianagomez-02-medium.jpg":"http://i.imgur.com/e2DEKQ3.jpg",
			"lucianagomez-03-large.jpg":"http://i.imgur.com/LKvEQT6.jpg",
			"lucianagomez-03-medium.jpg":"http://i.imgur.com/X93LeoP.jpg",
			"lucianagomez-04-large.jpg":"http://i.imgur.com/rne0aXe.jpg",
			"lucianagomez-04-medium.jpg":"http://i.imgur.com/LInh01N.jpg",
			"madmen-01-large.jpg":"http://i.imgur.com/makd8U4.jpg",
			"madmen-02-large.jpg":"http://i.imgur.com/ve3MCd9.jpg",
			"madmen-03-large.jpg":"http://i.imgur.com/9JTJWpE.jpg",
			"retoque-01-large.jpg":"http://i.imgur.com/F6WPTWB.jpg",
			"retoque-01-medium.jpg":"http://i.imgur.com/VeTuZnF.jpg",
			"retoque-02-large.jpg":"http://i.imgur.com/ZF7OqiR.jpg",
			"retoque-02-medium.jpg":"http://i.imgur.com/Lj7hqYW.jpg",
			"retoque-03-large.jpg":"http://i.imgur.com/FBZoYMA.jpg",
			"retoque-03-medium.jpg":"http://i.imgur.com/hygoOvF.jpg",
			"vaja-01-large.jpg":"http://i.imgur.com/zYFYpxU.jpg",
			"vaja-02-large.jpg":"http://i.imgur.com/49c7irA.jpg",
			"vaja-03-large.jpg":"http://i.imgur.com/GSiPDfQ.jpg",
			"vaja-04-large.jpg":"http://i.imgur.com/A1tu2xk.jpg",
			"vaja-05-large.jpg":"http://i.imgur.com/CtURrxG.jpg",
			"vaja-06-large.jpg":"http://i.imgur.com/8DEWOf9.jpg",
			"wordshow-01-large.jpg":"http://i.imgur.com/F2x5B7W.jpg",
			"wordshow-01-medium.jpg":"http://i.imgur.com/vevHMtz.jpg",
			"wordshow-01-small.jpg":"http://i.imgur.com/LVewQVI.jpg",
			"wordshow-02-large.jpg":"http://i.imgur.com/arzXVM8.jpg",
			"wordshow-02-medium.jpg":"http://i.imgur.com/Yo8TiSe.jpg",
			"wordshow-02-small.jpg":"http://i.imgur.com/WAhmJK4.jpg",
			"wordshow-03-large.jpg":"http://i.imgur.com/SO982jX.jpg",
			"wordshow-03-medium.jpg":"http://i.imgur.com/LTYLRpF.jpg",
			"wordshow-03-small.jpg":"http://i.imgur.com/mBwVbvf.jpg",
			"wordshow-04-large.jpg":"http://i.imgur.com/0GK50tU.jpg",
			"wordshow-04-medium.jpg":"http://i.imgur.com/vdPcv4G.jpg",
			"wordshow-04-small.jpg":"http://i.imgur.com/KGMCugr.jpg",
			"worldmysteries-01-large.jpg":"http://i.imgur.com/Z2WVbQV.jpg",
			"worldmysteries-01-medium.jpg":"http://i.imgur.com/XIY9zkx.jpg",
			"worldmysteries-01-small.jpg":"http://i.imgur.com/oSldVct.jpg",
			"worldmysteries-02-large.jpg":"http://i.imgur.com/AcOcLVT.jpg",
			"worldmysteries-02-medium.jpg":"http://i.imgur.com/i0zbFTT.jpg",
			"worldmysteries-02-small.jpg":"http://i.imgur.com/FiKPa4D.jpg",
			"worldmysteries-03-large.jpg":"http://i.imgur.com/nGw3nVC.jpg",
			"worldmysteries-03-medium.jpg":"http://i.imgur.com/mK7c9bY.jpg",
			"worldmysteries-03-small.jpg":"http://i.imgur.com/aFayw2t.jpg"
    };

    namespaces.local[_MODULE_NAME] = _images;

})(
        {
            local: LM
        }
);
