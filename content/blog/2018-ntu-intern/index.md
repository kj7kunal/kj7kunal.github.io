---
title: Summer Internship at NTU Singapore
date: '2020-09-01T12:00:00.00Z'
description: 'Research intern experience at NTU ROSE Lab'
---

Having worked on 3 ML projects in my fourth year, I really wanted to take up the
challenge of collaborating within a distinguished research group, preferably abroad.
A foreign training or FT, as per my university lingo, was considered a prestigious
opportunity for multifaceted exposure, as not only would you gain indispensable
experience working in an established institute set in an unfamiliar environment,
it would also be really thrilling to interact with people from different cultural
backgrounds with similar interests to freely exchange ideas and experiences.

Out of around 30 research labs that I applied to all over the world, I received
3 offers. I was most excited to work at the
[Rapid-Rich Object Search (ROSE) Lab](https://www.ntu.edu.sg/rose) at the
[Nanyang Technological University, Singapore](https://www.ntu.edu.sg/index),
as not only did the lab's research focus align with my interests, I would also be
able to gain work experience in [one of the top universities in Asia](https://www.topuniversities.com/university-rankings/asian-university-rankings/2018).

```
```

## Contents

- <a href="#selected">How I got selected</a>
  - <a href="#resume">Resume</a>
  - <a href="#application">Application Process</a>
  - <a href="#interview">Interview Call</a>
- <a href="#lab">The Lab</a>

- <a href="#project">The Project</a>
  - <a href="#objectives">Objectives</a>
  - <a href="#motivation">Motivation</a>
  - <a href="#implementation">Implementation</a>
  - <a href="#result">Result</a>
- <a href="#experience">My Experience</a>

```
```

<h2 id="selected">How I got selected</h2>

<h3 id="resume">Resume</h3>

In my fourth year, I started to diverge my career away from aerospace engineering,
to focus on my minor in Computer Science, especially in the areas of
Machine Learning and Artificial Intelligence. As semester projects, I was able
to work on some interesting applications of Machine Learning:

__Mental Workload Estimation__ [[Github]](https://github.com/kj7kunal/ML_Project)
> As part of the Machine Learning course (CS60050), I trained various ML models to estimate mental workload of a subject playing the N-Back game while wearing an Emotiv BCI headset. The project included feature engineering using signal processing techniques and resulted in a comparitive study between various ML models such as Decision Trees, Random Forests and Neural Nets.

__Artistic Image Rendering__ [[Github]](https://github.com/kj7kunal/Artistic_Image_Rendering)
> As part of the Deep Learning course (CS60048), I decided to implement neural image style transfer as described in the paper [_A Neural Algorithm of Artistic Style by Gatys et al_](https://arxiv.org/pdf/1508.06576v2.pdf). This gave me a good understanding of how CNNs propagate signals, and how we can use intermediate feature maps to extract representations of textures and color schemes from the lower layers, and of structure from the deeper layers. I also learned about designing custom loss functions for the given optimization problem.

Apart from curriculum coursework, I also independently took up online courses on 
Coursera such as the [Machine Learning course (Stanford University)](https://www.coursera.org/learn/machine-learning)
and the [Deep Learning Specialization (DeepLearning.AI)](https://www.coursera.org/specializations/deep-learning)
taught by Prof. Andrew Ng, to improve my knowledge of basic ML/DL techniques
through theory and coding assignments.

<h3 id="application">Application Process</h3>

The application process was pretty straightforward. Since I was mainly focussed on
getting research experience, I had compiled a list of around 30-40 research labs
that I wanted to work with and emailed their respective POCs. 
However, most of the replies were negative, partly because I applied very late
in the year and partly because my background in aerospace engineering put me at
a disadvantage in a cohort of CS major students, which I feel was the case in my
applications to research internship programs like DAAD and MITACS.

Ultimately, I heard back from 3 places, one of which was ROSE Lab, a joint collaboration
between Nanyang Technological University, Singapore, and Peking University, China.
I was very surprised to have received a positive reply from them, as it was in the
top 10 of my list, which was basically an ambitious tier for me.

After exchanging a few emails, we scheduled an hour-long interview call a week later,
and I was asked to prepare a short presentation about 1~2 of my best projects.

<h3 id="interview">Interview Call</h3>

I sent my presentation 2 days in advance of the interview call. On the Skype call, I
connected with the Deputy Director, [Dr Dennis Sng](https://sg.linkedin.com/in/dennissng),
who oversaw projects undertaken by the ROSE Lab, [Dr Lin Shan](https://warwick.ac.uk/fac/sci/dcs/people/xuuldl/),
a research fellow, who led the project I was supposed to work on, and of course
the lab's POC, Ms Wang Qian, with whom I was so far in touch with.

The interview call went on quite smoothly, and was structured mainly around my
presentation. I was able to explain my contributions to my projects and answered
related questions to the best of my knowledge. I was also questioned about my major,
and why I was interested in Machine Learning, which I was also prepared to answer.

I got the acceptance mail a week after the interview call, and I was super excited
to start the visa process!

```
```

<h2 id="lab">The Lab</h2>
The [Rapid-Rich Object Search (ROSE) Lab](https://www.ntu.edu.sg/rose) is a joint
collaboration between NTU Singapore and Peking University, China. Its vision is to
create the largest collection of structured domain object database in Asia, and to
further image-based object search applications.

The lab conducts research in the areas of computer vision, image processing, and
pattern recognition. It aims to develop scalable and robust mobile object search
services/applications involving areas of research like object recognition & retrieval,
deep learning & video analytics and multimedia forensics & biometrics. They have
taken the initiative of creating various [publicly-shared databases](https://www.ntu.edu.sg/rose/research-focus/datasets)
to further research that they believe might create huge economic value and
opportunities in the future.

Projects undertaken by the lab were usually overseen by Dr Dennis Sng (Deputy Director
& Principal Scientist​), and advised by [Prof Alex C. Kot](https://dr.ntu.edu.sg/cris/rp/rp00653) (Director).
The lab involves a workforce both from academia and industry, and hosts events
pertaining to the dissemination of knowledge on vision-based AI, particularly in
object search technology. 

<p align="center">
  <img src="ROSELabDoor.jpeg" alt="ROSE Lab"/>
</p>

```
```

<h2 id="project">The Project</h2>

<h3 id="objectives">Objectives</h3>

The project was a collaboration between ROSE Lab and the 
[Defence Science and Technology Agency (DSTA) Singapore](https://www.dsta.gov.sg/home).

The goal was to build a new dataset for Person Re-Identification (Person Re-ID) with 
the aim of simulating the real world application domain as much as possible. 
The plan involved capturing data with:

Scene Invariance
> - Wide range of locations covered using outdoor public surveillance cameras
> - Various times of the day (morning/afternoon/evening)
> - Different weather conditions (sunny/cloudy/rainy)
Clothing Invariance
> - "Actors" advised to wear various types of clothing during data collection

My responsibilities in the project were to create tools to automate extraction and
annotation of target "actor" images from surveillance video frames, to populate the
initial test dataset, which would later be benchmarked by existing Person Re-ID models.
I worked closely with [Dr Lin Shan](https://warwick.ac.uk/fac/sci/dcs/people/xuuldl/),
a PhD student who was leading the Re-ID project, as part of a two year secondment
under EU IDENTITY project between University of Warwick and NTU Singapore.

<h3 id="motivation">Motivation</h3>

Person Re-ID is defined as the problem of matching people across disjoint camera views
in a multi-camera system. It is an important task in the field of intelligent security.
A Re-ID system should be able to keep track of subjects (who are on a certain “watch-list”)
in surveillance videos of multiple probable locations of re-appearance.

It is an extremely challenging task due to a plethora of reasons:
> - Pose/viewing angle difference
> - Low Resolution CCTV footage
> - Crowded Areas
> - Occlusions
> - Algorithm inadequacies (Detection errors / Real-time requirement)
> - Unlimited/Open dataset task (Infinite number of classes for a classification problem)

<p align="center">
  <img src="reid_system.jpeg" alt="ReID system"/>
</p>

My task in the first week of the internship was to familiarize myself with the current
SOTA and identify strengths and shortcomings of popular public Person ReID datasets.

<p align="center">
  <img src="datasets.png" alt="Dataset Comparison"/>
</p>


I took a note of image sizes and attributes (such as gender, clothes, accessories, etc.)
in these datasets. I found out that these datasets had small camera networks, therefore
less variance in scenes. We were able to expand the network, as well as create a more
realistic surveillance setting, having secured access to public CCTV cameras:
> - ~80 cameras spread over 34 locations in NTU Singapore Campus (thanks to NTU)
> - ~50 cameras spread over 23 locations in Singapore (thanks to DSTA)
>   - Orchard Road (Shopping Area), CBD (Business Area) and Civic District (Tourist Area)

<p align="center">
  <img src="cctv.png" alt="CCTV footage"/>
</p>

Moreover, I learned that most of these datasets were hand-annotated, which ensured
high accuracy, but led to a smaller dataset and longer time to create one. Since I had
the fortune of working on the project in 2018, I decided to automate Person Detection
using Machine Learning.


<h3 id="implementation">Implementation</h3>

After the literature reviews, I drafted a roadmap for the project with my mentor,
which resulted the following to be implemented.

#### Dataset collection strategy: NTU ReID WebApp

We were considerate about privacy from an early stage, and developed what was called
the **Privacy-aware user-driven dataset collection strategy**. This involved a mobile
web-app designed using the **Google Maps API**, **Flask** and **Gunicorn** in **Python**.
It provided an easy interface for the volunteering “actors” in the dataset. 

<p align="center">
  <img src="daq_ntu.png" alt="Mobile WebApp"/>
</p>

**Privacy-aware**
> Only collected images of participants who accepted the privacy policy
**User-driven**
> The actor could indicate when they were passing through the FOV of a given surveillance camera, reducing annotation effort:
> - the web-app automatically recorded time-stamps which could be matched in the surveillance videos to extract 1-min clips for the particular actor
> - the actors enterred their own accurate appearance attributes into a form
**Collection Strategy** 
> The web-app would display active paths which could be walked on a particular day. This reduced the number of CCTV footage archives that had to be accessed in a day.

This approach proved to be an important USP of our system, since a year later, in 2019,
due to controveries about privacy and consent, the DukeMTMC dataset was
[shut down](https://www.dukechronicle.com/article/2019/06/duke-university-facial-recognition-data-set-study-surveillance-video-students-china-uyghur)
and MSMT17 has to release a new version to mask up the faces of all pedestrians involved.

#### Dataset creation: YOLOv3 -> ResNet50 -> Cosine Similarity

From the previous step, we could obtain 1-min video clips of the actors in the scene.
The next step was to extract the target actor's images from the video frames and
annotate them with the IDs and attributes of the target actor. The proposed pipeline
involved two main components - Person Detection (retrieval) and Target Extraction (ranking).

**[RETRIEVAL] Person Detection**
> The first task was to isolate regions corresponding to people within a video frame.
> A person detector was built using the [**YOLOv3 architecture**](https://pjreddie.com/darknet/yolo/)
> in **PyTorch**, and modified to return region proposals (bounding boxes) corresponding to the "Person" class. 

> The YOLOv3 system was much faster than Deformable Part Models
> (DPM) used in Market-1501 and Faster-RCNN architecture used in MSMT17, and had a
> mAP of 57.9% on [COCO test-dev](https://paperswithcode.com/sota/object-detection-on-coco).
> For more details, I recommend you to read the paper,
> [YOLOv3: An Incremental Improvement](https://pjreddie.com/media/files/papers/YOLOv3.pdf),
> as it is a very interesting and fun read! 


> The YOLOv3 Person Detection system was able to achieve 10fps processing speed on a
> Nvidia GTX 1070 GPU, for detecting and annotating bounding boxes within the surveillance video.

<p align="center">
  <img src="person_detect.gif" alt="Person Detection Demo"/>
</p>

**[RANKING] Target Extraction**
> The next step was to rank the retrieved images, i.e., extract target person from the YOLOv3
> detections. Since this was basically a simple tracking problem in a single video, we use
> a feature extraction with distance metric two-stage pipeline.

> A [ResNet50 CNN (pre-trained on ImageNet)](https://pytorch.org/hub/pytorch_vision_resnet/)
> was used to extract robust feature representations of detected pedestrians. The user
> first had to select the target person image, called the probe/query image, and tracking
> was achieved by ranking the [cosine similarity score](https://en.wikipedia.org/wiki/Cosine_similarity#Definition)
> of the 2048-D feature embeddings (after the global max-pooling layer) between query
> and YOLOv3 detected images. 

> Since the video was continuous, a weighted average of the original query image and
> the detected target image tracked in the last frame was used as the new query image.

<p align="center">
  <img src="retrieval.png" alt="Retrieval flow"/>
</p>

The Person Tracking system was able to a maximum of 5fps processing speed on a Nvidia
GTX 1070 GPU, for the entire pipeline, which involved person detection, target matching
and annotating bounding boxes within the surveillance video. Some of the developmental
scripts are available in this [Github repo](https://github.com/kj7kunal/Person-detect-identify).
<p align="center">
  <img src="person_track.gif" alt="Person Tracking demo"/>
</p>

<h3 id="result">Result</h3>

The new Rose-IDentification-Outdoor (Re-ID-Outdoor) dataset was collected and
annotated. The dataset was collected from 50 real surveillance cameras in NTU
and came with privacy consideration from all participants (volunteers in the campus).
Overall, the Re-ID-Outdoor dataset was considered the most realistic and also
the only privacy-aware public dataset for Person Re-ID research so far.

A similar dataset was also created from surveillance cameras in different areas
in Singapore, with actors consisting of ROSE Lab members. However, I am not sure
if that dataset was processed or released.

[Dr Lin Shan's thesis](http://wrap.warwick.ac.uk/143315/1/WRAP_Theses_Lin_2019.pdf)
explains his work on Person Re-ID meticulously, and is worth going through to understand
how the work was carried forward. Some of the images were taken directly from
the thesis for ease of writing this blog.

<p align="center">
  <img src="result.png" alt="Result"/>
</p>

```
```

<h2 id="experience">My Experience</h2>

As it was my first time going abroad, I was super excited to fly to Singapore as soon
as my fourth year ended. I had a list of action items sorted out for my first week
after talking to my lab's POC, to settle in the new place.

I was given a competitive stipend, and my lab had arranged for me to live in one of
the NTU hostels. NTU had a well-connected bus network, so getting around was no issue.
I had a Vietnamese roommate, who was a Bachelor's student in the university, and also a
great tour guide around the campus.

My first week at ROSE Lab was a mix of introductions and formal work. There was an
introductory session organized by Prof Kot and Dr Dennis, who introduced us to the
ROSE Lab team, talked about the various projects undertaken by the lab, and finally
showed us to our respective working areas. I had to take a day to visit the Singapore
Ministry of Manpower to receive my work permit, which was a very smooth process. I
also had to register for a temporary student ID with NTU Singapore. 

My "cubicle" was well-equipped and I was free to personalize it for the duration of
my stay! Even though there was a PC, I liked to use my own laptop, as most of my work
was on the on-prem servers. The research scholars around me were really friendly and
approachable, and they guided me through most of the setup process. 
<p align="center">
  <img src="cubicle.png" alt="My work area"/>
</p>

There were no fixed working hours within the lab, and I was trusted to work enough
hours to do my tasks well, at times that suit me and my team. Due to the extremely
hot and humid weather in Singapore, I tried to spend the day in the air-conditioned
lab. Sometimes I used to work through the nights, just to experiment. I had weekly
sync meetings with Lin Shan, and if I had anything else to discuss, we preferred
doing it over a walk around the building. I enjoyed Professor Kot's once-in-a-while
sync-ups with the interns, where he used to coax us with the benefits of living and
working in Singapore.

I lost a lot of weight during my stay in Singapore. No, it wasn't just because I was
saving money by eating less - my job involved a lot of field-work to collect the dataset!
As I am a very passionate runner, I used to sync data collection paths with my running
routes. I was also able to do some sightseeing around Singapore with some colleagues
in the process of collecting data!

<p align="center">
  <img src="data_walk.png" alt="Data Walks"/>
</p>

The lab had a diverse demographic, and I interacted with people from China, Brazil,
Belarus, Poland, etc. This was the first time I had mingled with people on a
global scale, and it was a really thrilling and emboldening experience for me. As an
introvert, I found it slightly overwhelming to socialize (free-talk) with such a group,
and I felt this experience helped me gain self-confidence and getting over my fears.

I was very happy to find 3 more Indian interns, as well as an Indian research scholar
working in the lab. We bonded well both in and outside the lab, and frequently went
out to explore Singapore over the weekends.

<p align="center">
  <img src="ROSE_indian.png" alt="ROSE Indians"/>
</p>

The most unexpected experience during my internship was the 3-day summer school
organized by ROSE Lab on research topics in 
[Visual Image Search and Video Analytics (VISVA)](https://rose1.ntu.edu.sg/event/VISVA2018/). 
It was an opportunity for me to get to know the state of the art technologies from
direct interaction and discussions with pioneers in academia and industry, in a
friendly and constructive environment. Research topics included Biometrics, Image
Forensics, Autonomous Vehicles, Object retrieval, as well as Person Re-ID in
Surveillance, which gave me a lot of insight while working on my own project!

<p align="center">
  <a href="https://www.youtube.com/watch?v=w2_HG4WV-v0">
    <img src="visva_all.png" alt="VISVA 2018"/>
  </a>
</p>

As I was facing my final year after the end of the internship, I was hungry for
career insight. Luckily, I was around research scholars who had and were taking such
decisions themselves. After multiple such interactions, as well as a career counseling
with Dr Dennis Sng, I found that I understood the merits to both academic and corporate life,
but also that I wanted to pursue higher studies only to get better jobs. However, one
thing was different from my past internships, and that was my reinforced enthusiasm
for the field I was working in - Machine Learning and Artificial Intelligence!
