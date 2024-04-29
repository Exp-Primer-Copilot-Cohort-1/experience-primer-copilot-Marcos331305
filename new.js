//write a code to create a new user
router.post('/new', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status
    }
}
);
