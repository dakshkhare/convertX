const express = require('express')
const multer = require('multer')
const cors = require('cors')
const docxToPDF = require('docx-pdf');
const path = require('path')

const app = express()
const port = 3000

const corsOptions = {
  origin: 'https://convert-x-pied.vercel.app', // your frontend URL
  methods: ['POST', 'GET'],
  credentials: true,
};

app.use(cors(corsOptions));

//setting up the file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })
app.post('/convertFile', upload.single('file'), (req, res, next) => {
    try {
        if(!req.file) {
            return res.status(400).json({
                message: 'No file uploaded.'
            });
        }
        //Defining output file path
        let outputFilePath = path.join(__dirname, "files",` ${req.file.originalname}.pdf`);
        docxToPDF(req.file.path, outputFilePath, (err, result)=> {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Error converting file to PDF.',
                });
            }
            res.download(outputFilePath, ()=>{
                console.log('File downloaded successfully');
            })
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An error occurred while processing the file.',
        });
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
