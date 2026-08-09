import json

logs_path = "/Users/rishabhnaik/.gemini/antigravity-ide/brain/79da9d13-278a-4cbc-9132-68c9bb099421/.system_generated/logs/transcript.jsonl"

print("Searching for write_to_file calls targeting prosthetics.html...")
with open(logs_path, "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        data = json.loads(line)
        content_str = json.dumps(data)
        # Search for any tool call with TargetFile containing prosthetics.html
        tc_list = data.get("tool_calls", [])
        for tc in tc_list:
            args = tc.get("args", {})
            target = args.get("TargetFile")
            if target and "prosthetics.html" in target:
                print(f"Match in Step {data.get('step_index')}:")
                print(f"  Tool: {tc.get('name')}")
                print(f"  TargetFile: {target}")
                content = args.get("CodeContent")
                if content:
                    print(f"  Has CodeContent: {len(content)} chars")
                else:
                    print(f"  No CodeContent (maybe edit or replacement?)")
