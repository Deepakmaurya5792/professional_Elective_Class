const checkroles = (...allowedRoles) => {
    return (req, res, next) => {

        const role = req.headers.role;

        if (!role) {
            return res.status(401).json({
                message: "Role is required"
            });
        }

        if (!allowedRoles.includes(role)) {
            return res.status(403).json({
                message: "Access denied. You do not have permission."
            });
        }

        next();
    };
};

export default checkroles;