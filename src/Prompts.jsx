import React, { useState } from "react";

const pathHistory = [];

const Prompts = () => {
    const promptTexts = {
        start: (
            <>
                <p>
                    This is meant to be an interactive flow chart for people who
                    might find self care, managing executive dysfunction, or
                    understanding internal cues challenging. It's designed to
                    take as much of the weight off of you as possible, so each
                    decision is very easy and doesn't require much judgment.
                </p>
                <p>
                    Why not reserve some time, perhaps about an hour in total,
                    to comfortably work your way through each step? Let's take
                    it easy, no need to hurry or skip ahead--just follow the
                    directions. Remember, self-care is a must, and you
                    absolutely deserve some dedicated time for it.
                </p>
                <p>
                    As a helpful tip, consider making this routine a part of
                    your daily routine for that extra boost of self-care right
                    from the get-go!
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p1"]);
                        pathHistory.push("start");
                    }}
                >
                    I'm ready for the first question.
                </a>
            </>
        ),
        p1: (
            <>
                <p>Have you eaten in the past 6 hours?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p2"]);
                            pathHistory.push("p1");
                        }}
                    >
                        Yes. Next question!
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p1.1"]);
                            pathHistory.push("p1");
                        }}
                    >
                        I could use a snack.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p1.2"]);
                            pathHistory.push("p1");
                        }}
                    >
                        No, I need a meal.
                    </a>
                </div>
            </>
        ),
        "p1.1": (
            <>
                <p>
                    When you need a snack, just pop some easy food in your
                    mouth.
                </p>
                <p>
                    If there's a particular food you're craving, it's totally
                    okay to enjoy it! You don't have to be perfect, only eating
                    healthy all the time-- no one does! Just remember to be a
                    little mindful when it comes to the portion size and how
                    nutritious it is for you. You're most likely pretty good at
                    listening to your intuition and knowing what your body
                    needs.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p2"]);
                        pathHistory.push("p1.1");
                    }}
                >
                    Okay, I finished my snack.
                </a>
            </>
        ),
        "p1.2": (
            <>
                <p>
                    You haven't eaten in a little while, and your body needs
                    fuel. It's time for breakfast, lunch, or dinner.
                </p>
                <p>
                    If there's a particular food you're craving, it's totally
                    okay to enjoy it! You don't have to be perfect, only eating
                    healthy all the time-- no one does! Just remember to be a
                    little mindful when it comes to the portion size and how
                    nutritious it is for you. You're most likely pretty good at
                    listening to your intuition and knowing what your body
                    needs.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p2"]);
                        pathHistory.push("p1.2");
                    }}
                >
                    I finished my meal, and I'm ready for the next step!
                </a>
            </>
        ),
        p2: (
            <>
                <p>Have you taken any medication you need to take?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p3"]);
                            pathHistory.push("p2");
                        }}
                    >
                        Yes, I'm all caught up on any medication I need to take.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p2.1"]);
                            pathHistory.push("p2");
                        }}
                    >
                        No, I need to take my pill.
                    </a>
                </div>
            </>
        ),
        "p2.1": (
            <>
                <p>
                    Medication needs to be taken on schedule, or your body might
                    react negatively.
                </p>
                <p>
                    Take some time now to take any pills, do any tests or
                    injections, or apply any ointments prescribed by your
                    doctor.
                </p>
                <p>
                    If this is a persistent problem for you, you may want to set
                    a smart phone alarm so you remember to take it at the same
                    time every day.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p3"]);
                        pathHistory.push("p2.1");
                    }}
                >
                    Okay, I took my medication. Next Question!
                </a>
            </>
        ),
        p3: (
            <>
                <p>
                    Drink a glass of whatever liquid you like best. Water is
                    ideal, but don't beat yourself up if you'd rather have tea,
                    soda, juice, or milk. Soda will actually make you feel
                    thirstier, but if it's easier for you, then that's okay!
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p4"]);
                        pathHistory.push("p3");
                    }}
                >
                    Okay, I did it.
                </a>
            </>
        ),
        p4: (
            <>
                <p>Are you in pain?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p5"]);
                            pathHistory.push("p4");
                        }}
                    >
                        No, my body feels fine.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p4.1"]);
                            pathHistory.push("p4");
                        }}
                    >
                        Yes, something hurts.
                    </a>
                </div>
            </>
        ),
        "p4.1": (
            <>
                <p>
                    If there is something your doctor has prescribed you for
                    pain, you should take it or do it.
                </p>
                <p>
                    For aches and pains, take an aspirin. You may also want to
                    apply a heating pad or a cold pack on whatever hurts.
                </p>
                <p>
                    If you have a stomach ache, there are medications for that,
                    like Pepto Bismol, and hot tea may also help.
                </p>
                <p>
                    Be nice to your body, and try to do "replace" the unpleasant
                    pain with some pleasant alternative sensations, like good
                    smells and pleasurable textures.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p5"]);
                        pathHistory.push("p4.1");
                    }}
                >
                    I am all taken care of.
                </a>
            </>
        ),
        p5: (
            <>
                <p>
                    Can you take a guess at how many hours you've slept out of
                    the last 24?
                </p>
                <p>
                    Everyone is an individual with different sleep schedules,
                    but most people need 8 hours of relatively uninterrupted
                    sleep. If you had less than that, and/or woke up frequently,
                    and/or had nightmares, it might help you to take a nap.
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p6"]);
                            pathHistory.push("p5");
                        }}
                    >
                        I am well-rested. Next question!
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p5.1"]);
                            pathHistory.push("p5");
                        }}
                    >
                        I need a nap.
                    </a>
                </div>
            </>
        ),
        "p5.1": (
            <>
                <p>
                    Take a nap. You can finish this self-care guide when you
                    wake up.
                </p>
                <p>
                    Ideally, let yourself sleep naturally, and sleep until you
                    wake up. Obviously, this isn't always possible. Otherwise,
                    set an alarm for yourself, with plenty of time to wake up
                    and get yourself together between your nap and your
                    responsibilities.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p6"]);
                        pathHistory.push("p5.1");
                    }}
                >
                    Okay, I'm well-rested now.
                </a>
            </>
        ),
        p6: (
            <>
                <p>
                    Next we're going to deal with other types of physical
                    discomfort you may be in.
                </p>
                <p>
                    Is something about your environment distressing or
                    uncomfortable?
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p7"]);
                        pathHistory.push("p6");
                    }}
                >
                    Let's continue!
                </a>
            </>
        ),
        p7: (
            <>
                <p>Are your surroundings the right temperature?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p7.1"]);
                            pathHistory.push("p7");
                        }}
                    >
                        I'm too cold.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p7.2"]);
                            pathHistory.push("p7");
                        }}
                    >
                        I'm too hot.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p8"]);
                            pathHistory.push("p7");
                        }}
                    >
                        I'm just right.
                    </a>
                </div>
            </>
        ),
        "p7.1": (
            <>
                <p>
                    If you're too cold, you can try putting on some warm
                    clothes, using a space heater, turning up the heat in your
                    home, putting on a blanket, and/or snuggling with a pet or
                    another person.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p8"]);
                        pathHistory.push("p7.1");
                    }}
                >
                    I'm not cold anymore.
                </a>
            </>
        ),
        "p7.2": (
            <>
                <p>
                    If you're too cold, you can try putting on some warm
                    clothes, using a space heater, turning up the heat in your
                    home, putting on a blanket, and/or snuggling with a pet or
                    another person.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p8"]);
                        pathHistory.push("p7.2");
                    }}
                >
                    I'm not cold anymore.
                </a>
            </>
        ),
        p8: (
            <>
                <p>Are your surroundings dirty or smelly?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p8.1"]);
                            pathHistory.push("p8");
                        }}
                    >
                        Yes, it's gross.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p9"]);
                            pathHistory.push("p8");
                        }}
                    >
                        No, it's fine.
                    </a>
                </div>
            </>
        ),
        "p8.1": (
            <>
                <p>
                    It's hard to feel okay in an environment that is unfriendly
                    for whatever reason. If your surroundings aren't clean, set
                    a timer for five minutes and take care of the biggest
                    problems, like leftover food, pet messes, or dirty clothes.
                </p>
                <p>
                    Chores can be scary and exhausting, but that's not what
                    we're doing here. We're just taking a little five-minute
                    clean up to make ourselves and our homes happier!
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p9"]);
                        pathHistory.push("p8.1");
                    }}
                >
                    Okay, I cleaned up a little!
                </a>
            </>
        ),
        p9: (
            <>
                <p>
                    Do you feel unsafe because of the people, or lack of people,
                    in your surroundings?
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p9.1"]);
                            pathHistory.push("p9");
                        }}
                    >
                        Yes, there are too many people here, or people I don't
                        feel comfortable with.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p9.2"]);
                            pathHistory.push("p9");
                        }}
                    >
                        I am alone and I don't like it.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p10"]);
                            pathHistory.push("p9");
                        }}
                    >
                        No, I'm good.
                    </a>
                </div>
            </>
        ),
        "p9.1": (
            <>
                <p>
                    If you can, try to remove yourself from situations that are
                    overwhelming or feel unsafe. If you can't relocate entirely,
                    take frequent breaks, or tune out with headphones.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p10"]);
                        pathHistory.push("p9.1");
                    }}
                >
                    I did my best. On to the next step.
                </a>
            </>
        ),
        "p9.2": (
            <>
                <p>
                    Being alone can feel really scary and unsafe. In reality, if
                    you take basic precautions, you're almost certainly fine!
                    However, getting a friend, making a phone or Skype call,
                    playing with a pet, and/or turning on the TV or music can
                    help.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p10"]);
                        pathHistory.push("p9.2");
                    }}
                >
                    I reached out to someone and I'm feeling better. I'm ready
                    for the next step.
                </a>
            </>
        ),
        p10: (
            <>
                <p>Does your body feel uncomfortable, sweaty, or dirty?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p10.1"]);
                            pathHistory.push("p10");
                        }}
                    >
                        Yes, I feel icky, gross, or unclean.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p11"]);
                            pathHistory.push("p10");
                        }}
                    >
                        No, I feel fine.
                    </a>
                </div>
            </>
        ),
        "p10.1": (
            <>
                <p>Do you have the energy and ability to take a shower?</p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p11"]);
                        pathHistory.push("p10.1");
                    }}
                >
                    Yes, I'll take a shower.
                </a>
            </>
        ),
        p11: (
            <>
                <p>
                    Now we've taken care of the physical reasons that you're not
                    feeling well. Now we're going to deal with the emotional
                    ones.
                </p>
                <p>
                    Obviously, this is a general guide, and can't pinpoint your
                    exact problem. But troubleshooting is a good practice, and
                    we're going to do our best together.
                </p>
                <p>
                    In my experience, most of the people who would need a flow
                    chart like this have a mental health problem of some type,
                    so these questions are geared towards common mental health
                    problems. You, of course, might have different needs, but
                    starting here can't hurt.
                </p>
                <p>
                    Do you know why you're in a bad mood, or not feeling well
                    emotionally? (Remember, any answer is okay!)
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p11.1"]);
                            pathHistory.push("p11");
                        }}
                    >
                        Yes, there's something on my mind.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p11.2"]);
                            pathHistory.push("p11");
                        }}
                    >
                        No, I don't know the reason.
                    </a>
                </div>
            </>
        ),
        "p11.1": (
            <>
                <p>
                    It sounds like there's something on your mind! We're going
                    to do our best to take care of it.
                </p>
                <p>
                    Set a timer for 15 minutes, and work on a solution. If it's
                    something you can change, then great! If not, do your best
                    to reach out to someone and talk about it.
                </p>
                <p>
                    Remember, 15 minutes and only 15! You can go back to
                    whatever it is after we're done working through this
                    together. We're just taking baby steps in the right
                    direction.
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p12"]);
                        pathHistory.push("p11.1");
                    }}
                >
                    Okay, I did my best.
                </a>
            </>
        ),
        "p11.2": (
            <>
                <p>
                    Sometimes, we don't know the source of our bad feelings, and
                    that's okay. We're gonna work through this together!
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p12"]);
                        pathHistory.push("p11.2");
                    }}
                >
                    Okay!
                </a>
            </>
        ),
        pg: (
            <>
                <p>Here are some ideas for grounding activities:</p>
                <ul>
                    <li>Take deep, calm breaths.</li>
                    <li>Notice and list things in your surroundings.</li>
                    <li>
                        Expose yourself to strong, pleasant sensations, like a
                        pleasing smell or a favorite blanket.
                    </li>
                    <li>
                        Say out loud your name, your age, the date, and your
                        location. List some things you've done today, or are
                        going to do.
                    </li>
                    <li>
                        Splash water on your face or run your hands under the
                        faucet.
                    </li>

                    <li>
                        Make tea. Feel the warmth of it in your hands, and the
                        taste as you sip it calmly.
                    </li>

                    <li>Listen to music.</li>
                    <li>Write in your journal.</li>
                    <li>
                        Take a mindful walk, either inside or outside. Pay close
                        attention to your body and your surroundings.
                    </li>
                    <li>
                        Squiggle. Wiggle around. Dance. Stretch. Be silly and
                        active for a few minutes.
                    </li>
                    <li>
                        Any other favorite grounding technique you've heard of
                        or can think of. There's nothing wrong with
                        experimenting!
                    </li>
                </ul>
                <a onClick={() => {
                    let previousPage = pathHistory[pathHistory.length - 1];
                    let nextPage = ""
                    switch (previousPage) {
                        case "p12.1":
                            nextPage = "p13";
                            break;
                        case "p12.2":
                            nextPage = "p13";
                            break;
                        case "p13.1":
                            nextPage = "p14";
                            break;
                        case "p14":
                            nextPage = "p15";
                            break;
                    }
                    setPrompt(promptTexts[nextPage]);
                    pathHistory.push("pg");
                }}>
                    Okay! I did one or more of these things, and I'm ready to
                    move on.
                </a>
            </>
        ),

        p12: (
            <>
                <p></p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p12.1"]);
                            pathHistory.push("p12");
                        }}
                    >
                        Yes, I feel anxious about something specific.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p12.2"]);
                            pathHistory.push("p12");
                        }}
                    >
                        Yes, but I don't know why.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p13"]);
                            pathHistory.push("p12");
                        }}
                    >
                        No, I don't feel very anxious.
                    </a>
                </div>
            </>
        ),
        "p12.1": (
            <>
                <p>
                    You're feeling anxious about something specific. That's
                    okay! Set a timer for 15 minutes and do something to take
                    care of that worry. Maybe chip away at a task that seems
                    insurmountable. You can do it!
                </p>
                <p>
                    If what you are feelin anxious about is something that is
                    not in your control, try some grounding exercises as well!
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["pg"]);
                            pathHistory.push("p12.1");
                        }}
                    >
                        I'd like to try some grounding exercises too.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p13"]);
                            pathHistory.push("p12.1");
                        }}
                    >
                        I feel better. Next question!
                    </a>
                </div>
            </>
        ),
        "p12.2": (
            <>
                <p>
                    You feel generally anxious, but you don't know why. That's
                    okay!
                </p>

                <a
                    onClick={() => {
                        setPrompt(promptTexts["pg"]);
                        pathHistory.push("p12.2");
                    }}
                >
                    I'd like to try some grounding exercises too.
                </a>
            </>
        ),
        p13: (
            <>
                <p>
                    Do you feel triggered? Are you having flashbacks? Is
                    something traumatic or upsetting from the past weighing on
                    your mind? Did you have a vivid nightmare?
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p13.1"]);
                            pathHistory.push("p13");
                        }}
                    >
                        Yes, I feel triggered.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p14"]);
                            pathHistory.push("p13");
                        }}
                    >
                        No, I'm not feeling triggered.
                    </a>
                </div>
            </>
        ),
        "p13.1": (
            <>
                <p>
                    If you're feeling triggered, see if there's a practical
                    action you can take to lessen your distress. Can you block
                    that unsafe person from your Facebook, for example?
                </p>
                <p>
                    If not, reach out and tell someone safe how you're feeling.
                    Just express yourself! Human contact works wonders when
                    you're not feeling well emotionally.
                </p>
                <p>
                    Remember that you're here in the present, and nothing from
                    your past can hurt you. If you like, you may want to try
                    some grounding exercises to reinforce that idea.
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["pg"]);
                            pathHistory.push("p13.1");
                        }}
                    >
                        I'd like to try some grounding exercises too.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p14"]);
                            pathHistory.push("p13.1");
                        }}
                    >
                        Okay, I'm ready for the next question.
                    </a>
                </div>
            </>
        ),
        p14: (
            <>
                <p>
                    Are you feeling dissociated, depersonalized, or derealized?
                    Do you feel far away, foggy, or unreal? Are you not sure who
                    you are?
                </p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["pg"]);
                            pathHistory.push("p14");
                        }}
                    >
                        Yes, I'm dissociated.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p15"]);
                            pathHistory.push("p14");
                        }}
                    >
                        No, I don't feel like that.
                    </a>
                </div>
            </>
        ),
        p15: (
            <>
                <p>Are you feeling depressed, sad, or upset?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p15.1"]);
                            pathHistory.push("p15");
                        }}
                    >
                        Yes, I'm feeling depressed.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p16"]);
                            pathHistory.push("p15");
                        }}
                    >
                        No, I'm not very depressed.
                    </a>
                </div>
            </>
        ),
        "p15.1": (
            <>
                <p>
                    Feeling depressed isn't fun, but it doesn't last forever!
                    Don't be mad or disappointed with yourself for feeling
                    depressed.
                </p>
                <p>
                    Take 15 minutes and accomplish something small, like loading
                    the dishwasher or making a friendship bracelet. You are not
                    a failure, and your situation is not hopeless! You are a
                    superhero, even if it doesn't feel like it.
                </p>

                <a
                    onClick={() => {
                        setPrompt(promptTexts["16"]);
                        pathHistory.push("p15.1");
                    }}
                >
                    Okay, I've done my best to take care of myself and I'm ready
                    for the next question.
                </a>
            </>
        ),
        p16: (
            <>
                <p>Are you feeling lonely or in need of attention?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p16.1"]);
                            pathHistory.push("p16");
                        }}
                    >
                        Yes, I'm feeling lonely.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p17"]);
                            pathHistory.push("p16");
                        }}
                    >
                        No, I'm not very lonely. Next question!
                    </a>
                </div>
            </>
        ),
        "p16.1": (
            <>
                <p>
                    Everybody feels lonely sometimes. If you're feeling lonely,
                    there's ways to reach out to people!
                </p>
                <p>
                    You can talk to someone in your house, or call someone on
                    the phone. You can also use texting or Facebook messenger to
                    speak to someone. You may want to talk about how you're
                    feeling, or you may not. Anything you want to talk about is
                    okay!
                </p>
                <p>
                    If that isn't or doesn't seem possible, you can post a
                    general message on Facebook, Tumblr, Vent, or another
                    internet service, about whatever you want!
                </p>
                <a
                    onClick={() => {
                        setPrompt(promptTexts["p17"]);
                        pathHistory.push("p16.1");
                    }}
                >
                    Okay, I did my best to take care of myself and I'm ready for
                    the next question
                </a>
            </>
        ),
        p17: (
            <>
                <p>Are you feeling foggy?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p17.1"]);
                            pathHistory.push("p17");
                        }}
                    >
                        Yes, I feel foggy.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p18"]);
                            pathHistory.push("p17");
                        }}
                    >
                        No, my head feels pretty clear.
                    </a>
                </div>
            </>
        ),
        "p17.1": (
            <>
                <p>If you are feeling foggy, you might need some exercise.</p>
                <p>Do you have the energy and ability to go for a walk?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p17.2"]);
                            pathHistory.push("p17.1");
                        }}
                    >
                        Yes, a walk sounds great.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p17.3"]);
                            pathHistory.push("p17.1");
                        }}
                    >
                        No, a walk would be too much for me.
                    </a>
                </div>
            </>
        ),
        "p17.2": (
            <>
                <p>
                    Walks are really good for both our bodies and our minds.
                    Take a walk of whatever length you choose! You're not trying
                    to burn calories or get to a particular destination; you're
                    just taking a pleasant stroll. Enjoy it!
                </p>

                <a
                    onClick={() => {
                        setPrompt(promptTexts["p18"]);
                        pathHistory.push("p17.2");
                    }}
                >
                    Okay, I am back from my walk and I'm ready for the next
                    question.
                </a>
            </>
        ),
        "p17.3": (
            <>
                <p>If you can't take a walk, that's okay!</p>
                <p>Here are some alternatives:</p>
                <ul>
                    <li>Jumping jacks</li>
                    <li>Bouncing on the bed</li>
                    <li>Dancing</li>
                    <li>Push ups</li>
                    <li>Yoga</li>
                    <li>Stretching</li>
                    <li>
                        Wiggling, squirming, jiggling around; be silly and
                        active and have fun!
                    </li>
                </ul>
                <p>
                    If none of those are or seem possible, just sit outside for
                    some fresh air!
                </p>

                <a
                    onClick={() => {
                        setPrompt(promptTexts["p18"]);
                        pathHistory.push("p17.3");
                    }}
                >
                    Okay, I did some exercise to the best of my ability. I'm
                    ready for the next question.
                </a>
            </>
        ),
        p18: (
            <>
                <p>Do you have pets?</p>
                <div>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p18.1"]);
                            pathHistory.push("p18");
                        }}
                    >
                        Yes, I've got animals in my house.
                    </a>
                    <a
                        onClick={() => {
                            setPrompt(promptTexts["p19"]);
                            pathHistory.push("p18");
                        }}
                    >
                        No, no pets for me!
                    </a>
                </div>
            </>
        ),
        "p18.1": (
            <>
                <p>
                    Playing with pets can be a great way to take the edge off
                    when you're not feeling well. It doesn't matter what kind of
                    pet you have, just take some time to interact with them. Pet
                    your cat, take your dog outside, feed your fish, hug your
                    lizard...
                </p>

                <a
                    onClick={() => {
                        setPrompt(promptTexts["p19"]);
                        pathHistory.push("p18.1");
                    }}
                >
                    Good idea! I'm ready for the next question.
                </a>
            </>
        ),
        p19: (
            <>
                <p>
                    Take half an hour and do whatever you want to do right now.
                    This can be anything: crafts, watching TV, laying on the
                    couch, taking a walk, playing Farmville... your choices are
                    literally endless!
                </p>
                <p>
                    Obviously, don't do anything that's bad for you, like
                    feeding addictions or harming yourself or others.
                </p>

                <a
                    onClick={() => {
                        setPrompt(promptTexts["p20"]);
                        pathHistory.push("p19");
                    }}
                >
                    I did 30 minutes of fun and now I'm ready to move on to the
                    next step.
                </a>
            </>
        ),
        p20: (
            <>
                <p>We've reached the end of this self care guide.</p>
                <p>
                    It's time to reassess. Maybe now that you've done all this
                    self care, you feel better-- great! Maybe you don't, and
                    that's okay too. But hopefully you've cleared things up and
                    you know what to do next to take care of yourself.
                </p>
                <p>
                    You deserve self care, so even if it's hard, do your best!
                </p>
                <p>Good luck!</p>
            </>
        ),
    };

    const [prompt, setPrompt] = useState(promptTexts["start"]);
    return <>{prompt}</>;
};

export default Prompts;
