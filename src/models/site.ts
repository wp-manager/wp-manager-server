import { Schema, model } from "mongoose"
import { ISite } from "../interfaces/site";

const siteSchema = new Schema<ISite>({
    uri: String,
    mobileScreenshot: String,
    desktopScreenshot: String,
    screenshotExpires: Date,
    skipScreenshot: Boolean,
    pagespeed: {
        expires: Date,
        mobile: {
            performance: Number,
            accessibility: Number,
            bestPractices: Number,
            seo: Number,
        },
        desktop: {
            performance: Number,
            accessibility: Number,
            bestPractices: Number,
            seo: Number,
        }
    }
});

const Site = model<ISite>("Site", siteSchema);

export default Site;