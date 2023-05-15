import '../../styles/Contact.scss'

export const ContactHead: React.FC = () => {
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <br />
                <h4>
                    Contact Information
                </h4>
                <br />

                
                <form action='post'>
                    <div className="form-group">
                        <label htmlFor="firstName"></label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"></label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone"></label>
                        <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Phone Number" />
                    </div>

                    <br />
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{ marginLeft: '-85%' }}>Chinese</label>
                        <input type="checkbox" value="chinese" className="form-check-input" id="chineseCheck" />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{ marginLeft: '-85%' }}>English</label>
                        <input type="checkbox" value="english" className="form-check-input" id="englishCheck" />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{ marginLeft: '-85%' }}>Babysit</label>
                        <input type="checkbox" value="babysit" className="form-check-input" id="babysitCheck" />
                    </div>
                    <select name="kidsNumber" id="kidsNumber">
                        <option value="" >How Many Children?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="alot">A lot</option>
                    </select>
                    <br />

                    <br />
                    <div className="form-description">
                        {/* <label className="form-description-label" htmlFor="description1">Description</label> */}
                        <textarea name="textarea"
                            id="description1"
                            placeholder='How can I help you?'
                            style={{ height: '100px', width: '400px' }}></textarea>
                    </div>

                    <br />
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )

}