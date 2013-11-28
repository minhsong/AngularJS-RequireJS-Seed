/**
 * Created by Edgar Martinez on 8/13/13.
 */
define(function () {
    return {
        save: function () {
            var data = {
                "items": [
                    {
                        "id": "73",
                        "gallery_cover_image_id": "1432",
                        "gallery_name": "Example",
                        "gallery_seo_alias": "Example",
                        "gallery_description": "",
                        "image_thumb": "thumb_Jesus-in-the-hall.jpg",
                        "image_year_path": "2013",
                        "image_month_path": "08",
                        "image_day_path": "12"
                    }
                ], "code": "OK", "total": "1"
            };

            return {
              success: function (method) {
                   method(data);
              }
            }
        }
    }
});
