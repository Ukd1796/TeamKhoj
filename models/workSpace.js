const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
        adminName: {
            type: String,
            required: true
        },
        adminEmail: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        workspaceCode: {
            type: Number,
            required: true
        }, 
        workspaceName: {
            type: String,
            required: true
        },
        dateofCreation: {
            type:String,
            required:true
        },
        members: [String]
    },
    {
        timestamps: true,
        usePushEach: true
    }
)
mongoose.models = {}

module.exports = mongoose.model('Workspace', workspaceSchema);