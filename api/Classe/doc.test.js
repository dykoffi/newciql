const frisby = require('frisby')

describe('GET /user', function() {
    it("should return l valid users list", function () {
        return frisby
        .get("http://localhost:3983/User")
        .expect("status", 403);
    });
});