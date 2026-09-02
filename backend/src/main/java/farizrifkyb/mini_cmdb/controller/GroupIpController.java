package farizrifkyb.mini_cmdb.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import farizrifkyb.mini_cmdb.model.request.GroupIpRequest;
import farizrifkyb.mini_cmdb.model.response.WebResponse;
import farizrifkyb.mini_cmdb.service.GroupIpService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class GroupIpController {

    private final GroupIpService groupIpService;

    @PostMapping(path = "/api/groups/{group_id}/ips", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<String> assignIp(@PathVariable("group_id") Long groupId,
            @RequestBody @Valid GroupIpRequest req) {
        return WebResponse.<String>builder().data(groupIpService.assignIp(groupId, req)).build();
    }

    @DeleteMapping(path = "/api/groups/{group_id}/ips", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public WebResponse<String> removeIp(@PathVariable("group_id") Long groupId,
            @RequestBody @Valid GroupIpRequest req) {
        return WebResponse.<String>builder().data(groupIpService.removeIp(groupId, req)).build();
    }
}
