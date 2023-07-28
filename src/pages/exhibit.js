import React, { useState } from 'react'

const Exhibit = () => {

    const form = {
        eventSelection: [],
        title: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        company_name: '',
        job_title: '',
        country_of_residence: '',
        website: '',
        nature_of_business: '',
        other_nature_of_business: '',
    }

    const [formData, setFormData] = useState(form);

    const countries = ["Country of Residence", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
        "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

    const natureOfBusinessOptions = ["Nature of Business", "Abayas/Sheilas", "Beauty (Cosmetics, Toiletries, Nail Care)", "Bridal & Fashion Accessories", "Bridal Dresses", "Cakes/Confectionery/Chocolates", "Best Wedding Hair Stylist", "Haute Couture", "Henna Dresses", "Home Accessories", "Hotel, Venues and Caterers", "Jalabiyas/Kaftans", "Jewellery & Watches", "Medical Aesthetics", "Perfume & Arabic Oud", "Photography/Videography", "Spa & Wellness Centres", "Travel & Tourism", "Wedding Gifts and Favors", "Wedding Organizers and Planner", "Wedding Services", "Other, please specify"];

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        let updatedSelection = formData.eventSelection.slice(); // Create a copy of the array
        if (checked) {
            updatedSelection.push(value);
        } else {
            updatedSelection = updatedSelection.filter((item) => item !== value);
        }
        setFormData({ ...formData, eventSelection: updatedSelection });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "data": { ...formData } }),
            redirect: 'follow'
        };

        let res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/contact-uses`, requestOptions)
        if (res.status == 200) {
            setFormData(form)
            alert("Successful")

        }
    };



    return (
        <div className="container !max-w-[1290px] mx-auto">
            <div className='text-center'>
                <div className='mb-9 mt-3'>
                    <h1 className='font-semibold text-[46px] text-[#767171]'>ENQUIRE TO EXHIBIT</h1>
                </div>
                <div className='w-[425px] mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='text-left mb-[15px]'>Please select an event: *</div>
                            <div className='text-left mb-[15px]'>
                                <input className='mr-[10px]' type="checkbox" checked={formData.eventSelection.includes("Bride Abu Dhabi")} value="Bride Abu Dhabi" onChange={handleCheckboxChange} />
                                <label className="mr-[10px]">
                                    <span className="label-style">Bride Abu Dhabi </span>
                                </label>
                                <input className='mr-[10px]' type="checkbox" checked={formData.eventSelection.includes("Bride Dhabi")} value="Bride Dhabi" onChange={handleCheckboxChange} />
                                <label className="mr-[10px]">
                                    <span className="label-style">Bride Dubai</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-[15px]" id="container_title">
                            <select id="title" name="title" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" value={formData.title} required onChange={handleChange}>
                                <option value="">Title</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss">Miss</option>
                                <option value="Eng.">Eng.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Prof.">Prof.</option>
                                <option value="Sheikh">Sheikh</option>
                                <option value="Sheikha">Sheikha</option>
                            </select>
                        </div>
                        <div className="mb-[15px]">
                            <input id="first_name" name="first_name" type="text" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="First Name" value={formData.first_name} required onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <input id="last_name" name="last_name" type="text" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Last Name" value={formData.last_name} required onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <input id="email" name="email" type="email" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Email" value={formData.email} required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$" onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <input id="phone_number" name="phone_number" type="tel" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Phone Number eg +971 4 1234567" value={formData.phone_number} required pattern="^\+?( ?\(?-?\d\)?){6,13}$" onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <input id="company_name" name="company_name" type="text" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Company Name" value={formData.company_name} required onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <input id="job_title" name="job_title" type="text" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Job Title" value={formData.job_title} required onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <select id="country_of_residence" name="country_of_residence" value={formData.country_of_residence} className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" required onChange={handleChange} >
                                {countries.map((country, index) => (
                                    <option key={index} value={country == "Country of Residence" ? "" : country}>
                                        {country}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="mb-[15px]">
                            <input id="website" name="website" type="text" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Website" value={formData.website} onChange={handleChange} />
                        </div>
                        <div className="mb-[15px]">
                            <select id="nature_of_business" name="nature_of_business" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" value={formData.nature_of_business} required onChange={handleChange} >
                                {natureOfBusinessOptions.map((option, index) => (
                                    <option key={index} value={option == "Nature of Business" ? "" : option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-9">
                            <input id="other_nature_of_business" name="other_nature_of_business" type="text" className="w-[425px] h-[32px] px-2 text-[11px] border-[1px] border-[#bbbbbb]" placeholder="Other Nature of Business" value={formData.other_nature_of_business} onChange={handleChange} />
                        </div>
                        <div>
                            <button className='uppercase bg-[#9e0851] px-16 py-3 text-white rounded-[3px] text-[20px]'>submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default Exhibit;