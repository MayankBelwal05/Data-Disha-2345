import { useState } from 'react'
// import '/CustomBookingForm.css'

export default function CustomBookingForm() {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        location: '',
        imageUrl: 'https://img.freepik.com/free-photo/close-up-recording-video-with-smartphone-concert-toned-picture_1153-6814.jpg?t=st=1711655671~exp=1711659271~hmac=b23f78cc2b4385b56000933ba5ef636f39ff011e112ea16708d1be2c4de83fa9&w=996',
        startDateTime: '',
        endDateTime: '',
        price: '$749.99',
        isFree: false,
    })

    //     title: { type: String, required: true },
    //     description: { type: String },
    //     location: { type: String },
    //     createdAt: { type: Date, default: Date.now },
    //     imageUrl: { type: String, required: true },
    //     startDateTime: { type: Date, default: Date.now },
    //     endDateTime: { type: Date, default: Date.now },
    //     price: { type: String },
    //     isFree: { type: Boolean, default: false },
    //     url: { type: String },
    //     category: { type: Schema.Types.ObjectId, ref: 'Category' },
    //     organizer: { type: Schema.Types.ObjectId, ref: 'User' }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

  return (
    <div>

        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="title">Event Title: </label>
            <input type="text" name='title' id='title' placeholder='Enter Event Name' value={eventData.title} onChange={e => setEventData({...eventData, title: e.target.value})} />

            <label htmlFor="location">Location: </label>
            <input type="text" name='location' id='location' placeholder='Enter Event Location' value={eventData.location} onChange={e => setEventData({...eventData, location: e.target.value})} />

            <label htmlFor="startDateTime">Starting Date: </label> 
            <input type="datetime-local" name='startDateTime' id='startDateTime' placeholder='Enter Start Date' value={eventData.startDateTime} onChange={e => setEventData({...eventData, startDateTime: e.target.value})} />

            <label htmlFor="endDateTime">Ending Date: </label>
            <input type="datetime-local" name='endDateTime' id='endDateTime' placeholder='Enter End Date' value={eventData.endDateTime} onChange={e => setEventData({...eventData, endDateTime: e.target.value})} />

            <label htmlFor="isFree">Event Type: </label>
            <select name="isFree" id="isFree" value={eventData.isFree} onChange={e => setEventData({...eventData, isFree: e.target.value})} >
                <option value="">Choose here</option>
                <option value="true">Public</option>
                <option value="false">Private</option>
            </select>

            <label htmlFor="description">Write Brief Description: </label>
            <textarea id="description" name="description" rows="4" cols="50" value={eventData.description} onChange={e => setEventData({...eventData, description: e.target.value})}></textarea>

            <button type="submit">Create Event</button>

        </form>


    </div>
  )
}
