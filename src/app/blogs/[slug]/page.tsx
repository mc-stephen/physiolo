import Image from "next/image";
import Styles from "./page.module.css";
import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";
import blogReadImage from "/public/image/sport-therapy-header.jpg";

export default function BlogRead() {
    return (
      <main className={Styles.SportTherapy}>
        {/*  */}
        <BodyHeader
          pageTitle={"Sports therapy treatments"}
          imageAlt={"Sports therapy treatments Image"}
          pagePath={"HOME / Sports therapy treatments"}
          imageSource={profilePic}
        />
  
        {/*  */}
        <section>
            <article>
                <div className={Styles.sportTherapySection}>
                    <div className={Styles.postSection}>
                        <div className={Styles.postContentBox}>
                            <Image 
                                className={Styles.postThumbnail} 
                                src= {blogReadImage}
                                alt={"post Thumnnail"}
                            />
                            <ul className={Styles.postListItems}>
                                <li className={Styles.postListItem}><a href="" className={Styles.postListItemLink}><span className={Styles.postListItemIcon}><i className="fa fa-calendar"  aria-hidden="true"></i></span> JUNE 13 2023</a></li>
                                <li className={Styles.postListItem}><a href="" className={Styles.postListItemLink}><span className={Styles.postListItemIcon}><i className="fa fa-user-o" aria-hidden="true"></i></span> ADMIN</a></li>
                                <li className={Styles.postListItem}> <span className={Styles.postListItemIcon}><i className="fa fa-commenting-o" aria-hidden="true"></i></span> 0 comments</li>
                                <li className={Styles.postListItem}><span className={Styles.postListItemIcon}><i className="fa fa-tags" aria-hidden="true"></i></span>
                                    <a href="" className={Styles.postListItemLink}> Health  </a>
                                    <a href="" className={Styles.postListItemLink}> Life  </a>
                                    <a href="" className={Styles.postListItemLink}> Psychology  </a>
                                    <a href="" className={Styles.postListItemLink}> Therapy  </a>
                                    <a href="" className={Styles.postListItemLink}> Treatment  </a>
                                    <a href="" className={Styles.postListItemLink}> Uncategorized  </a>
                                </li>
                            </ul>
                            <p className={Styles.postContent}>Our sports therapy treatments are designed to help you optimize your 
                                athletic performance and prevent injuries. Whether you are a professional athlete or simply 
                                enjoy exercise, our experienced therapists are available to help you achieve your goals.</p>
                            <p className={Styles.postContent}> Our approach is based on a holistic view of the body and sporting activities. 
                                We understand that every person is unique and has different needs. {"That's "} 
                                why we develop personalized treatment plans tailored to your individual goals and requirements.</p>
                            <p className={Styles.postContent}>Our sports therapy treatments include a variety of techniques and approaches including manual therapy, 
                                physical therapy, massage, rehabilitation training and more. Our therapists are highly qualified and 
                                have extensive experience working with athletes of different disciplines and performance levels.</p>
                            <p className={Styles.postContent}>Another important aspect of our sports therapy treatments is injury prevention. 
                                Our therapists work closely with you to identify potential risk factors and teach you proper techniques and exercises to avoid injury. Through regular sessions and close support, 
                                we help you optimally prepare your body for sporting activities and increase your performance.</p>
                            <p className={Styles.postContent}>Our goal is to not only help you treat injuries, but also provide long-term solutions to improve your athletic performance. 
                                We believe that sports therapy should not just be a short-term measure, 
                                but an integral part of your sporting activities and well-being</p>
                            <span className={Styles.postTags}>Tags: 
                                <a href="" className={Styles.postTag}> Best Germany Physiotherapy Practices</a>
                                <a href="" className={Styles.postTag}>Footballer treatment</a>
                                <a href="" className={Styles.postTag}>Physiotherapy for Footballers</a>
                                <a href="" className={Styles.postTag}>Physiotherapy in Football</a>
                            </span>
                        </div>
                        <div className={Styles.otherPost}>
                            <a href="" className={Styles.otherPostLink}>The Benefit Of Manual Therapy: Effective Pain Relief And Improved Mobility For an Active Life  </a>
                            <span className={Styles.linkArrow}><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
                        </div>
                        <h1 className={Styles.formHeading}>Leave a Reply</h1>
                        <p className={Styles.formIntro}>Your email address will not be published. Required fields are marked *</p>
                        <form className={Styles.postForm}> 
                            <div className={Styles.formInputFields}>
                                <label htmlFor="comment" className={Styles.formLabel}>Comment *</label>
                                <textarea typeof="text" id="comment" required rows={5} cols={20} className={Styles.formTextareaField}></textarea>
                                <div className={Styles.formInnerInputFields}>
                                    <div className={Styles.formInputBox}>
                                        <label htmlFor="name" className={Styles.formLabel}>Name *</label>
                                        <input type="text" id="name" className={Styles.formInputField} required/>
                                    </div>
                                    <div className={Styles.formInputBox}>
                                        <label htmlFor="email" className={Styles.formLabel}>Email *</label>
                                        <input type="email"  id="email" className={Styles.formInputField} required/>
                                    </div>
                                </div>
                                <label htmlFor="webite" className={Styles.formLabel}>Website</label>
                                <input type="url" id="website" className={Styles.formInputField}/>
                                <input type="submit" value="POST COMMENT" className={Styles.formButton}/>
                            </div>
                        </form>
                    </div>
                    <div className={Styles.postSidebar}>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Categories</h2>
                            <ul className={Styles.widgetList}>
                                <li className={Styles.widgetListItem}><a href="">General</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Health</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Insights</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Life</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Psychology</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Therapy</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Treatments</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Uncategories</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                            </ul>
                            <form className={Styles.widgetSearchForm}>
                                <label htmlFor="search" className={Styles.widgetFormLabel}>
                                    <input type="search" id="search" placeholder="Search Here" className={Styles.searchField}/>
                                </label>
                                <button type="submit" className={Styles.searchSubmit}><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </aside >
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Search site</h2>
                            <form className={Styles.widgetSearchForm}>
                                <label htmlFor="search" className={Styles.widgetFormLabel}>
                                    <input type="text" id="search" placeholder="Search Here" className={Styles.searchField}/>
                                </label>
                                <button type="submit" className={Styles.searchSubmit}><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Categories</h2>
                            <ul className={Styles.widgetList}>
                                <li className={Styles.widgetListItem}><a href="">General</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Health</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Insights</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Life</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Psychology</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Therapy</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Treatments</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                                <li className={Styles.widgetListItem}><a href="">Uncategories</a><span className={Styles.listIcon}><i className="fa fa-folder-o" aria-hidden="true"></i></span></li>
                            </ul>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Archives</h2>
                            <ul className={Styles.widgetList}>
                                <li className={Styles.widgetListItem}>June 2023</li>
                            </ul>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Tags</h2>
                            <ul className={Styles.widgetTagList}>
                                <li className={Styles.widgetTagItem}><a href="">Pain Relief</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Best Germany Pysiotherapy Practices</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Agility</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Restore Mobility</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Effective Pain Relief</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Football Treatment</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Holistic Approach</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Joint Mobilization</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Manual Therapy</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Muscles Relaxation</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Physiotherapy For Footballers</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Pysiotherapy in Football</a></li>
                            </ul>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>About us</h2>
                            <p className={Styles.widgetContent}>Our theme will take your workflow to all-new levels of high productivity. 
                                We know you’ll find everything you need – and more!</p>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Subscribe to newsletter</h2>
                            <p className={Styles.widgetContent}>Newsletter not subscribe to</p>
                            <div>
                                <p className={Styles.widgetContent}></p>
                            </div>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Recent post</h2>
                            <ul className={Styles.widgetpostSection}>
                                <li className={Styles.widgetpostSectionItem}>
                                    <div className={Styles.widgetPostImageBox}> 
                                        <Image
                                            className={Styles.widgetPostImage} 
                                            src= {profilePic}
                                            alt={"Post Thumbnail"}
                                        />
                                    </div>
                                    <div className={Styles.widgetPostIntro}>
                                        <a href="" className={Styles.widgetPostTitle}>The Benefit Of Manual Therapy: Effective Pain Relief And Improved Mobility For an Active Life</a>
                                        <span className={Styles.widgetPostTime}><i className="fa fa-calendar"  aria-hidden="true"></i> JUNE 20 2023</span>
                                    </div>
                                </li>
                                <li className={Styles.widgetpostSectionItem}>
                                    <div className={Styles.widgetPostImageBox}>
                                        <Image
                                                className={Styles.widgetPostImage}  
                                                src= {profilePic}
                                                alt={"Post Thumbnail"}
                                            />
                                    </div>
                                    <div className={Styles.widgetPostIntro}>
                                        <a href="" className={Styles.widgetPostTitle}>Sports Therapy Treatments</a>
                                        <span className={Styles.widgetPostTime}><i className="fa fa-calendar"  aria-hidden="true"></i> JUNE 13 2023</span>
                                    </div>
                                </li>
                            </ul>
                        </aside>
                        <aside className={Styles.postAside}>
                            <h2 className={Styles.widgetTitle}>Popular Tags</h2>
                            <ul className={Styles.widgetTagList}>
                                <li className={Styles.widgetTagItem}><a href="">Pain Relief</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Best Germany Pysiotherapy Practices</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Agility</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Restore Mobility</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Effective Pain Relief</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Football Treatment</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Holistic Approach</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Joint Mobilization</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Manual Therapy</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Muscles Relaxation</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Physiotherapy For Footballers</a></li>
                                <li className={Styles.widgetTagItem}><a href="">Pysiotherapy in Football</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </article>
        </section>
        </main>
    );
}