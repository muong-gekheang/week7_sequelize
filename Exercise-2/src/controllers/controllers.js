import { Author, Book } from '../model/index.js'

export const addNewAuthor = async (req, res) => {
    try{
        const { name, birthYear } = req.body;
        const newAuthor = await Author.create({name, birthYear});
        return res.status(201).json({
            message: "insert author into file successfully",
            data: newAuthor,
        })
    } catch (error) {
        console.error("Insert error:", error);
        return res.status(500).json({ error: "Failed to insert author" });
    }
} 

export const createBook = async (req, res) => {
    try{
        const {title, publicationYear, pages, authorName} = req.body;
        console.log("Raw Request Body:", req.body);
        console.log("Publication Year (Raw):", publicationYear, "Type:", typeof publicationYear);
        if(!authorName){ 
            return res.status(400).json({
                message: "author name is required",
            })
        }
        const author = await Author.findOne({where:{name: authorName}});

        if(!author){
            return res.status(404).json({
                message: "This author is not exist in author table",
            })
        }

        if(!publicationYear){
            return res.status(400).json({
                message: "publicatoion is required",
            })
        }
        
        const newBook = await author.createBook({title, publicationYear, pages});
        return res.status(201).json({
            message: "inesrt book into file successfully",
            data: newBook,   
        })
    } catch (error) {
        console.error("Insert error: ", error);
        return res.status(500).json({ error: "Failed to insert book" });
    }
}

