const { Router } = require("express");
const router = Router();

const tattooArtistsRouter = require("./tattooArtistRouter");
const customerRouter = require("./customerRouter");
const publicationRouter = require("./publicationRouter");
const priceRangeRouter = require("./priceRangeRouter");
const tattoStyleRouter = require("./tattooStyleRouter");
const filterRouter = require("./filterRouter");
const timeAvailabilityRouter = require("./timeAvailabilityRouter");
const appointmentRouter = require("./appointmentRouter");
const loginRouter = require("./loginRouter");
const nodemailerRouter = require("./nodemailerRouter");
const timeAvailabilityExceptionRouter = require("./timeAvailabilityExceptionRouter");
const adminRouter = require("./adminRouter");
const reviewRouter = require("./reviewRouter");
const mercadoPagoRouter = require("./mercadoPagoRouter");
const customerRouterDisabled = require("./customerDisabledRouter");
const tattooArtistsRouterDisabled = require("./tattooArtistDisabledRouter");

router.use("/customerDisabled", customerRouterDisabled);
router.use("/tattooStyles", tattoStyleRouter);
router.use("/tattooArtists", tattooArtistsRouter);
router.use("/priceRange", priceRangeRouter);
router.use("/publications", publicationRouter);
router.use("/customers", customerRouter);
router.use("/filters", filterRouter);
router.use("/timeAvailabilities", timeAvailabilityRouter);
router.use("/timeAvailabilityExceptions", timeAvailabilityExceptionRouter);
router.use("/appointments", appointmentRouter);
router.use("/auth", loginRouter);
router.use("/admins", adminRouter);
router.use("/reviews", reviewRouter);
router.use("/nodemailer", nodemailerRouter);
router.use("/payments", mercadoPagoRouter);
router.use("/tattooArtistsDisabled", tattooArtistsRouterDisabled);

module.exports = router;
