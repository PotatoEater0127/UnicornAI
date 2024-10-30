import { useRef, useState } from "react";
import styled from "styled-components";
import * as Styled from "./index.styles";

function AudioRecord({ className }: { className?: string }) {
  const [isRecording, setIsRecording] = useState(false);
  // record handlers
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  // access user's mic
  const mediaStream = useRef<MediaStream | null>(null);
  // store audio data chunks
  const recordedChunks = useRef<Blob[]>([]);

  const stopRecording = () => {
    // release user's mic
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
    }
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
  };

  const playAudio = (audioUrl?: string) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  const handleRecordToggle = async () => {
    if (isRecording) {
      stopRecording();
    } else {
      // request mic access
      mediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaRecorder.current = new MediaRecorder(mediaStream.current);
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) recordedChunks.current.push(event.data);
      };
      mediaRecorder.current.onstop = () => {
        // combine chunks into a single audio Blob
        const audioBlob = new Blob(recordedChunks.current, {
          type: "audio/wav",
        });
        const url = URL.createObjectURL(audioBlob); // create URL for playback
        // reset recorded chunks
        recordedChunks.current = [];
        playAudio(url);
      };

      mediaRecorder.current.start();
    }
    setIsRecording(!isRecording);
  };

  return (
    <Styled.Container className={className}>
      <Styled.Button onClick={handleRecordToggle} $isRecording={isRecording} />
    </Styled.Container>
  );
}

export default styled(AudioRecord)``;
