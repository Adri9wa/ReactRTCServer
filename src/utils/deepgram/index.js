import React, {Component} from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import _ from "lodash";

// It should be in .env, but ...
const API_KEY = 'bfb90841298dcba22d38c5096619557a95628ca3';

/**
 * This class handles everything that is need for audio recording and converting audio into text.
 *
 * @link https://www.npmjs.com/package/mic-recorder-to-mp3
 * @link https://developers.deepgram.com/documentation
 *
 */
class Deepgram {
    constructor(props) {
        this.recorder = new MicRecorder({
            bitRate: 128
        });
        this.recording = false;
        this.onText = (() => {});
        this.onRecordingStateChanged = (() => {});
        
        this.setRecordingState = (value) => {
            this.recording = value;
            if(this.onRecordingStateChanged) this.onRecordingStateChanged(value);
        }
    }
    
    /**
     * @callback onText - ( (text: string) => void ) called when text is ready
     * @param cb
     */
    setOnTextCallback = (cb) => {
        this.onText = cb;
    }
    
    /**
     * @callback onRecordingStateChanged - ( (newValue: boolean) => void ) called when recording starts or ends
     * @param cb
     */
    setOnRecordingChangeCallback = (cb) => {
        this.onRecordingStateChanged = cb;
    }
    
    /**
     * Call this function if you need to know if we are currently recording
     * @return {boolean}
     */
    getRecordingState = () => {
        return this.recording;
    }
    
    /**
     * Start recording. Browser will request permission to use your microphone.
     */
    startRecording = () => {
        if(this.recording) return;
        this.recorder.start().then(() => {
            this.setRecordingState(true);
        }).catch((e) => {
            console.error(e);
        });
        
    }
    
    stopRecording = () => {
        if(!this.recording) {
            this.recorder.stop(); // Just to make sure that everything is turned off
            return;
        }
        
        this.recorder
            .stop()
            .getMp3().then(([buffer, blob]) => {
                const file = new File(buffer, 'voice_command.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });
                this.setRecordingState(false);
            
                fetch('https://api.deepgram.com/v1/listen?language=en-US&model=general', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'audio/mp3',
                        'Authorization': `Token ${API_KEY}`,
                    },
                    body: file
                }).then((response) => {
                    return response.json()
                }).then(result => {
                    const text = _.get(result, 'results.channels[0].alternatives[0].transcript')
                    if(this.onText) this.onText(text);
                    // console.log('text: ', text)
                    // console.log('Result: ', result)
                }).catch(e => {
                    console.error("Cannot send request to Deepgram service: ", e);
                });
            
                // Play recorded audio
                // const player = new Audio(URL.createObjectURL(file));
                // player.play();
            
            }).catch((e) => {
                console.error(e);
            });
    }
}

export default Deepgram;