class Teacher{
    constructor(name, channel, likes=0) {
        this.name = name;
        this.channel = channel;
        this.likes = likes
    }

    likesFunc() {
        let vedioLikes = this.likes++
        return `Welcome to ${this.channel} , Thank you for ${vedioLikes} likes`;
    }
}

const obj1 = new Teacher('pyush', 'roadside coder')
obj1.likesFunc()
obj1.likesFunc()
console.log(obj1.likesFunc());

