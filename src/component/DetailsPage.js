import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import coin from "../Image/coin.jpg";
import Donation from "../Image/dotane.jpg";
import market from "../Image/market.jpg";
import blog from "../Image/pexels-snapwire-38867.jpg";
import service from "../Image/pexels-anna-shvets-4587996.jpg";
import play from "../Image/pexels-bin-ziegler-1364729.jpg";
import Schedule from "../Image/shedule.jpg";
import lost from "../Image/lost.jpg"
import discover from "../Image/events.jpg"
import locataion from "../Image/everywhere.jpg"


const DetailsPage = () => {
    return (
        <div className="pt-5 pb-5" style={{ backgroundColor: "white" }}>
            <Container>
                <Row>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={play} alt="" />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Pet Match Playmate</h1>
                            <p className="dtParr">Are you searching for the right companion for your pet? If yes, then we can help you find the perfect playmate! We streamline the entire process so pet owners can avoid combing through dozens of filters and meetings to meet their pet’s requirements. Using a dedicated social platform, you can easily get in touch with various pet owners in your area that are looking for the same thing as you.</p>
                            <ul>
                                <li>The fastest and most reliable way to find the ideal playmate for your pet.</li>
                                <li>Just create your pet’s profile along with their cutest photos to discover the best possible match.</li>
                                <li>Quickly go through various pet profiles available on our mobile app.</li>
                                <li>After selecting your candidates, start a conversation with the other owner and set a date for your pets.</li>
                            </ul>
                            <h4>Our Process</h4>
                            <p>After registering and creating your pet’s profile, you’ll be shown a listing of the pet profiles within your designated area. This can be set to a specific distance, so you don’t have to travel too far to set up a play date. Zoonders allows for private, in-app chats to protect your privacy and personal contact information from other pet owners. This gives you complete safety to organize meetups, events, and much more with complete safety!</p>

                            <h4>Pet Profile Details</h4>
                            <p>Zoonders allows you to upload pictures/videos and important information like the name, age, gender, and breed of your pet into their profile. This gives other pet owners a good grasp of your pet’s personality and if they would be a good candidate for a play date. The more you fill out, the more certain you can be of finding the right partner for your pet!</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Pet Schedule</h1>
                            <p className="dtParr">Our in-app scheduling feature makes setting up and planning routines for your furry buddies easier than ever!</p>
                            <ul>
                                <li>Intuitive interface and built-in reminder system.</li>
                                <li>Save your pet’s personal details into the schedule</li>
                                <li>Never forget bath times or flea treatments ever again</li>
                                <li>Keep your pet up to date on vaccination dates, vet visits, and much more</li>
                            </ul>
                            <h4>How it Works</h4>
                            <p>The Pet Schedule service is a great option to plan and get reminders for your pet’s many appointments and activities. Just feed the date and time into your calendar to receive automated notices for upcoming events!</p>
                            <h4>Schedule Alarm for Different Activities</h4>
                            <p>Any pet owner will tell you that properly caring for an animal is a lot of work. There are dozens of things to keep track of from feedings, grooming sessions, vet visits, and vaccination dates. We make sure you can enjoy the moment without worry by allowing you to set up alarms for all your pet related events. These can repeat for regular grooming appointments or be created as one-time instances.</p>

                            <h4>Why is it Beneficial?</h4>
                            <p>Everybody wants their furry friend to live a long and healthy life. But it’s also important to stress activity and fun as well. Our scheduling feature isn’t only for medical processes but can also plan out your pet’s play dates. It is a one-stop planner to keep your pet’s entire life organized and ensure that you never miss an important event.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={Schedule} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px", marginBottom: "25px" }}>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={Donation} alt="" />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Donation</h1>
                            <p className="dtParr">
                                With the help of our users, Zoonders has joined to fight to end the suffering of animals across the globe. Puppy mills, premature euthanization, and intolerable living conditions are just a few of the problems we seek to fix. <br />
                                By creating communities in every area, we are able to directly connect your funds with your local animal shelters. You’ll know exactly where your donations are going, and they’ll even help raise the overall quality of the neighborhoods you live in. Nobody likes to see stray or sick animals in their area. Most of these institutions are heavily underfunded and understaffed leading to a decreased quality of life for the animals in their care. <br />
                                Apart from the local level, we are looking to alleviate some of the big problems for animals in Pakistan by starting our own animal shelter there. Each year, roughly 50,000 dogs alone are killed in Pakistan, a number that can be heavily reduced through compassionate donations. <br />
                                A bucket is filled with 10,000 drops. Even small donations will come together to bring about real change in the world.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Pet Blog / News</h1>
                            <p className="dtParr">
                                No matter how long you’ve had your pet, it’s always helpful to learn something new. Zoonders features a multi-topic blog that provides news, tips, and upcoming events on a biweekly basis. We’ll help you stay up to date with all the information you need to provide optimum care and a happy life for your furry friend.
                            </p>

                            <h4>Travel Guides</h4>
                            <p>For anyone looking to explore new areas with their little companions, our blog is an irreplaceable resource. No matter where you go, we cover the best places to stop by and get a great experience with your pet. From pet friendly cafes to all-inclusive beaches, we’ll help you plan out your perfect trip!</p>

                            <h4>Dashing Dogs and Fetching Felines</h4>
                            <p>Nothing soothes a hard day than a collection of the cutest pets on the internet (besides yours, of course.) Our blog puts a spotlight on the latest trends surrounding people’s pets to give you a few ideas for fun paired activities. Whether it’s spooky Halloween traditions or family portraits, you’ll have an endless supply of inspiration.</p>

                            <h4>Health and Wellness</h4>
                            <p>Treating an elderly or sick pet is miles different from caring for another human. With the number of ‘home treatments’ you find on the internet, it can be hard to figure out what is legit. Our blog includes articles related to grooming and health to help pet owners understand what is safe or unsafe for their best friend.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={blog} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px"}}>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={locataion} alt="" />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Fill Your Map with Pet-Friendly Locations!</h1>
                            <p className="dtParr">You’d be surprised at how pet friendly a lot of cities are these days. With the growing trend of bringing your four-legged friends on outdoor adventures, many establishments have done away with antiquated “No Pets” policies. However, it is important to confirm beforehand so that you don’t waste the effort of getting your pet ready for travel. Possible places to visit include grocery stores, department stores, salons, restaurants, and even entertainment stations. <br />
                                Zoonders lets you search up places near you and learn about their pet policies and amenities!
                            </p>
                            <h4>Never Get Thrown Out Again</h4>
                            <p>Little is worse than going out of your way to drive to a café with your pet and learning that your little friend isn’t allowed in. Save yourself the trouble (and a bit of time) by using our built-in map service to filter out all the places that won’t accommodate your pet.</p>
                            <h4>Learning and Growing Map Details</h4>
                            <p>We strive to have a 100 percent accurate map to make your life as easy as possible. To this end, our map service can be added to or updated by all Zoonders users. If a location has recently amended their pet policies, then the map listing can be quickly changed.</p>
                            <h4>Safety First – For your Pet and Others</h4>
                            <p>Bringing your pet to public places requires a certain amount of trust. If your pet has known behavioral problems or isn’t fully vaccinated, then it may pose a danger to others. If pet-related incidents occur, then businesses may choose to stop catering to pets of all kinds.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Discover Pet-Friendly Events Near You!</h1>
                            <p className="dtParr">We’ve all gone through it, leaving our homes with our pet’s sad eyes boring into our backs. Especially when we know how much they love the great outdoors. While many events aren’t well-suited to pets, there are plenty out there that keep animal safety in mind. However, finding them all can be a bit of a chore, so Zoonders has compiled a list of pet-friendly events in your area!
                            </p>
                            <ul>
                                <li>Quickly find fun events you can enjoy with your pet</li>
                                <li>Location based so you aren’t shown locations outside of driving distance</li>
                                <li>Create a group to travel and attend events with through our built-in chat</li>
                                <li>Easily filter for events that match what you enjoy</li>
                            </ul>

                            <h4>How it Works</h4>
                            <p>
                                All you have to do is input your area or have the app automatically pinpoint your location. This will generate a list of possible events in your area that is either pet-themed or safe for pets. You can also filter out this list quickly with our search bar in case you were looking to attend a specific type of occasion. Depending on where you live, you may need to zoom out or increase the search radius to find suitable events.</p>

                            <h4>Host Events in your Area</h4>
                            <p>
                                If you can’t find any suitable events in your area, then feel free to organize your own! Our platform is geared towards social interaction between pet owners and is the perfect conduit to making new friends for both you and your pet. Group play dates, new food tastings, and dog training events are just a few of the fun activities you can put together!</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={discover} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px"}}>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={lost} alt="" />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">LOST AND FOUND ALERTS!</h1>
                            <p className="dtParr">
                                Zoonders focuses on creating a tight-knight community of pet owners in your area. Something that any owner can understand, is the fear and stress of losing their pet. Within our platform, you can create lost or found reports so that any pet can quickly be returned to their loving homes.</p>
                            <h4>Included Information</h4>
                            <p>Our lost and found alerts include all the information already in your pet profile. Meaning your pets breed, gender, color, age, and photo will be available to the entire community. This goes a long way to allowing other users to recognize your pet and take action. Your contact information will also be shown so that whoever finds your pet will know exactly how to contact you.
                            </p>
                            <h4>Zoonders Code Dog ID Tag for Pets</h4>
                            <p>For a one-time fee, Zoonders will send you a barcode ID tag for your pet. This can attach directly to a collar and works as a link to your pet’s profile on the Zoonders application. Other users can quickly friend or save your dog’s profile for future meetups or events. <br />
                                This tag can save your pet’s life and return them to you much faster. Even if other users have not seen your posting in “Lost and Found” they will know to contact you based on your pet’s ID tag.</p>
                            <h4>Other Steps</h4>
                            <p> Despite how effective our lost and found system is, you’ll want to do everything you can to locate your pet as soon as possible. A few extra steps that will maximize your chances of finding Fido are:</p>
                            <ul>
                                <li>Join your neighborhood group on social media platforms and post there</li>
                                <li>Call and visit your local animal or stray shelter</li>
                                <li>Drive to areas you frequently visit with your pet, they may walk there on their own</li>
                                <li>Keep someone home at all times in case your pet returns</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Zoonders Coins</h1>
                            <p className="dtParr">
                                With the assortment of resources and services offered on Zoonders, we’ve created an in-app currency to save you a bit of time. Just purchase a certain number of Zoonders coins and skip the hassle of saving or inputting your card information for every transaction.
                                Zoonders coins can even be bought as a gift by relatives or friends. These coins are good for products in our store and can even be transferred between other pet owners.
                            </p>

                            <h4>Zoonder Services</h4>
                            <p>Some of the amenities you can find on Zoonders are:</p>
                            <ul>
                                <li><span style={{ fontWeight: "bold" }}>Video Trainers :</span> Learn the best methods to train your pet. We have expert-made videos concerning both obedience and trick training.</li>
                                <li><span style={{ fontWeight: "bold" }}>Pet Walks :</span> For the busy pet owner, giving your pet a proper walk every day can be a bit too much. Break up your pet’s daily boredom with a scheduled walk even when you aren’t home.</li>
                                <li><span style={{ fontWeight: "bold" }}>Boarding/Sitting Services :</span> You can quickly find a trusted person to watch your pet while you go on vacation or extended trip. This can be set up at your home or theirs, and you’ll know that your pet is in good hands with your local community.</li>
                                <li><span style={{ fontWeight: "bold" }}>Live Video Veterinarians :</span> Sometimes emergencies don’t allow you the time to drive to the vet. Also, most vet clinics aren’t open 24/7. Gain access to live video veterinarians so that you can have your pet’s health concerns addressed at any time.</li>
                            </ul>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={coin} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={market} alt="" />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Zoonders Marketplace</h1>
                            <p className="dtParr">
                                Finding quality products you can trust for your pet requires a suitable amount of in-depth research. Zoonders has affiliated with a collection of reputable stores to show you the best options available. All of the products on Zoonders Marketplace have been thoroughly vetted for both health and effectiveness. They are the greatest tools available for training, fun, and a generally fantastic lifestyle! <br />
                                A few of the special deals and goods you can find on Zoonders Marketplace are:
                            </p>
                            <ul>
                                <li>Pet Gear (Leashes, collars, training tools, bowls, etc…)</li>
                                <li>Treats and Toys</li>
                                <li>Pet Food for Different Breeds and Species</li>
                                <li>Grooming and General Care Equipment</li>
                                <li>Vitamins and Pill Supplements</li>
                                <li>And much more!</li>
                            </ul>
                            <p>We have expert veterinarian services available for consultation to help you pick out the best food, treats, and toys for your pet. So, no need to spend hours of research deciphering what ingredients your 13-year-old, female, pit bull requires to stay healthy.</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ borderTop: "1px solid grey", paddingTop: "25px" }}>
                    <Col md={9}>
                        <div className="headCol">
                            <h1 className="mb-3">Why Use our Services</h1>
                            <p className="dtParr">
                                Think of Zoonders as the Facebook of the pet world. It is a free social network platform designed to connect local pet owners into a community. Pet profiles can include photos, videos, and other information about each pet and even allows users to video call or chat with one another. Zoonders offers pet news for an extensive library of useful information. Not to mention, the app works on a global scale, and exists anywhere that a strong pet community can form. <br />
                                We also consolidate all your pet’s needs into one marketplace, so you don’t need to open up dozens of tabs to get everything your pet requires. Such as food, preventative care, brushes, and many other things. Our vendors are connected with pet stores and provide products that have been vetted by veterinarians for safety. <br />
                                Zoonders is committed to helping the increasing number of stray animals around the world. Our pet adoption services connect would-be pet owners with those looking to rehome their pet. This gives animals the smoothest transition from one loving home to the next. <br />
                                So, if you’re an owner looking to spice up your pet’s life with new activities, friends, toys, and challenges, then Zoonders is the app for you!
                            </p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <img className="img-fluid" src={service} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsPage
