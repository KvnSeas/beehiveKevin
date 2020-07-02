class Bee{
    constructor(id, name, email, phone, username, website, address, company){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone =phone;
        this.username = username;
        this.website = website;
        this.address = address;
        this.company = company;
        this.posts = [];
    }
    addPost(post){
        this.posts.push(post);
    }
}