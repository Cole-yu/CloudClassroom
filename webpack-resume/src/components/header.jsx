import "../assets/styles/header.css";
import "../assets/styles/selected.scss";

export default{
    data(){
        return {
            author:"Jokcy"
        }
    },
    render(){
        return (
            <div id="selectedMonth">
                <span className="my-name">Written by {this.author}</span>
            </div>
        )
    }
}