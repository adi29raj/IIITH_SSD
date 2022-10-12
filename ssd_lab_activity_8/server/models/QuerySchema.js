const mongoose = require('mongoose')

let Schema = mongoose.Schema
const QuerySchema = new Schema(
    {
        exam_name: {
            type: String,
            required: true,
        },
        course_name: {
            type: String,
            required: true,
        },
        question_num: {
            type: String,
            required: true,
        },
        ta_roll: {
            type: String,
            required: true,
        },
        std_roll: {
            type: String,
            required: true,
        },
        ta_comment: {
            type: String,
            required: false,
        },
        std_comment: {
            type: String,
            required: true,
        },
        IsActive: {
            type: Boolean,
            required: true,
        }
    }

)

module.exports = QuerySchema

