export const addItem = (req, res,next) =>{
    res.json("Item added successfully");
};

export const getItems = (req, res, next) =>{
    res.json("View all Items")
};

export const getItem =(req, res, next) =>{
    res.json("View item");
};

export const updateItem = (req, res, next) => {
    res.json("Item updated successfully");
};


export const deleteItem = (req, res, next) => {
    res.json("Item deleted successfully");
};